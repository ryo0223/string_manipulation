const parse=require("./xml_parse");

const server=require("./xml_server")
const assert = require('assert')

it('test if parser returns the right array', () => {
    var arr=parse.parser("<InputDocument>"+
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
        "<RefText>513795739</RefText>"+
        "</Reference>"+
        "<Reference RefCode=\"KEY\">"+
        "<RefText>DUB16049</RefText>"+
        "</Reference>"+
        "<Reference RefCode=\"CAR\">"+
        "<RefText>8392JFAE</RefText>"+
        "</Reference>"+
        "<Reference RefCode=\"COM\">"+
        "<RefText>71Q0019681</RefText>"+
        "</Reference>"+
        "<Reference RefCode=\"SRC\">"+
        "<RefText>ECUS</RefText>"+
        "</Reference>"+
        "<Reference RefCode=\"TRV\">"+
        "<RefText>1544323</RefText>"+
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
        "</InputDocument>");
    assert.equal(arr[0][1],"513795739");
    assert.equal(arr[1][1],"8392JFAE");
    assert.equal(arr[2][1],"1544323");
});

var xml=
    "<InputDocument>"+
    "<DeclarationList>"+
    "<Declaration  Version=\"5.13\">"+
    "<DeclarationHeader>"+
    "<Jurisdiction>IE</Jurisdiction>"+
    "<CWProcedure>IMPORT</CWProcedure>"+
    "<DeclarationDestination>CUSTOMSWAREIE</DeclarationDestination>"+
    "<DocumentRef>71Q0019681</DocumentRef>"+
    "<SiteID>CORK</SiteID>"+
    "<AccountCode>G0779837</AccountCode>"+
    "</DeclarationHeader>"+
    "</Declaration>"+
    "</DeclarationList>"+
    "</InputDocument>";
it('test if server\'s functions returns the right array', () => {
    assert.equal(server.check_site(xml),false)
    assert.equal(server.check_command(xml),false)
});

