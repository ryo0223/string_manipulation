// import necessary libraries
var express = require('express');
var xmlparser = require('express-xml-bodyparser');
var DOMParser = require('xmldom').DOMParser;
var app = require('express')();

app.use(express.json());
app.use(express.urlencoded());
app.use(xmlparser());

function check_command(xml_command){ // check if Command is DEFAULT
    xml_command= new DOMParser().parseFromString(xml_command);
    var dec = xml_command.documentElement.getElementsByTagName("Declaration");
    dec=dec[0].getAttribute("Command")
    if(dec=="DEFAULT"){
        return true;
    }
    else{
        return false;
    }
}
function check_site(xml_site){ //check if side id is DUB
    xml_site= new DOMParser().parseFromString(xml_site);
    var dec = xml_site.documentElement.getElementsByTagName("SiteID"); // look for Site ID

    if(dec[0].firstChild.nodeValue=="DUB"){ // see if xml file's Site ID is DUB
        return true;
    }
    else{
        return false;
    }
}
app.post('/xml',function(req, res){ // post endpoint
var given_xml=
    "<InputDocument>"+
    "<DeclarationList>"+
    "<Declaration Command=\"DEFAULT\" Version=\"5.13\">"+
        "<DeclarationHeader>"+
        "<Jurisdiction>IE</Jurisdiction>"+
        "<CWProcedure>IMPORT</CWProcedure>"+
        "<DeclarationDestination>CUSTOMSWAREIE</DeclarationDestination>"+
        "<DocumentRef>71Q0019681</DocumentRef>"+
    "<SiteID>DUB</SiteID>"+
    "<AccountCode>G0779837</AccountCode>"+
    "</DeclarationHeader>"+
    "</Declaration>"+
    "</DeclarationList>"+
    "</InputDocument>";
    res.type('application/xml');

    var body = '';
    req.on('data', function(data) { //access html data
        body= data.toString('utf8')
    });
    req.on('end', function (){
        var xml_text=[];
        var list=body.split("\n")
        for(i of list){
            trimmed_line=i.trim() //remove whitespace
            if(trimmed_line[0]=="<") { // take all tags
                xml_text.push(trimmed_line)
            }
        }
        var xml_post=xml_text.join("") // concat all the elements of the array

        console.log(check_command(xml_post));
        console.log(check_site(xml_post));
        if(xml_post==given_xml) {
            res.send("0"); // send status 0 if received xml file is the same as the given xml
        }
        else if(check_command(xml_post)){
                res.send("-1"); // send status 01 if the received xml file has DEFAULT
            }
        else if(check_site(xml_post)) {
            res.send("-2"); // send status -2 if the received xml file has the Site ID,DUB
        }
  });

});
module.exports = { check_site,check_command }
app.listen(8080, function () { // to specify which port this server should use.
    console.log("Example app listening at %s" ,8080)
})