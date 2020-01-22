var text
var DOMParser = require('xmldom').DOMParser;
function parser(xml_doc){
    xml_doc=new DOMParser().parseFromString(xml_doc)
    var Element=xml_doc.documentElement.getElementsByTagName("Reference")
    var arr=[] // array to contain RefCode values

    for( i=0;i< Element.length;i++){
        // see if Reference has MWB ,TRV or CAR
        if(Element[i].getAttribute("RefCode")=="MWB" || Element[i].getAttribute("RefCode")=="TRV" || Element[i].getAttribute("RefCode")=="CAR"){
            for(j=0;j<Element[i].childNodes.length;j++) {
                var child = Element[i].childNodes[0].firstChild.nodeValue
                arr.push([Element[i].getAttribute("RefCode"), child]) //add RefCode and its value
            }
        }
    }
    return arr;
}
text ="<InputDocument>"+ //load the xml message by the parser
    "<DeclarationList>"+
    "<Declaration Command=\"DEFAULT\" Version=\"5.13\">"+
    "<DeclarationHeader>"+
    "<Jurisdiction>IE</Jurisdiction>"+
    "<CWProcedure>IMPORT</CWProcedure>"+
    "<DeclarationDestination>CUSTOMSWAREIE</DeclarationDestination>"+
    "<DocumentRef>71Q0019681</DocumentRef>"+
"<SiteID>DUB</SiteID>"+
"<AccountCode>G0779837</AccountCode>"+
"<Reference RefCode=\"MWB\">"+
    "<RefText>586133622</RefText>"+
    "</Reference>"+
    "<Reference RefCode=\"KEY\">"+
    "<RefText>DUB16049</RefText>"+
    "</Reference>"+
    "<Reference RefCode=\"CAR\">"+
    "<RefText>71Q0019681</RefText>"+
"</Reference>"+
"<Reference RefCode=\"COM\">"+
   "<RefText>71Q0019681</RefText>"+
"</Reference>"+
"<Reference RefCode=\"SRC\">"+
    "<RefText>ECUS</RefText>"+
    "</Reference>"+
    "<Reference RefCode=\"TRV\">"+
    "<RefText>1</RefText>"+
    "</Reference>"+
    "<Reference RefCode=\"CAS\">"+
    "<RefText>586133622</RefText>"+
    "</Reference>"+
    "<Reference RefCode=\"HWB\">"+
    "<RefText>586133622</RefText>"+
    "</Reference>"+
    "<Reference RefCode=\"UCR\">"+
    "<RefText>586133622</RefText>"+
    "</Reference>"+
    "<Country CodeType=\"NUM\" CountryType=\"Destination\">IE</Country>"+
    "<Country CodeType=\"NUM\" CountryType=\"Dispatch\">CN</Country>"+
    "</DeclarationHeader>"+
    "</DeclarationList>"+
    "</InputDocument>";
var array_xml=parser(text)

module.exports = { parser }


console.log(array_xml) // display all the element in the array