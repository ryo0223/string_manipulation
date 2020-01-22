import unittest
from LOC import LOC_array_gen
class TestStringMethods(unittest.TestCase):



    def test_LOC(self):
        s = """UNA:+.? '
UNB+UNOC:3+2021000969+4441963198+180525:1225+3VAL2MJV6EH9IX+KMSV7HMD+CUSDECU-IE++1++1'
UNH+EDIFACT+CUSDEC:D:96B:UN:145050'
BGM+ZEM:::EX+09SEE7JPUV5HC06IC6+Z'
LOC+11+IG28983'
LOC+389+SOL23'
LOC+3523+SE'
LOC+36253+HF'
LOC+449+FW9089'
DTM+9:20090527:102'
DTM+268:20090626:102'
DTM+182:20090527:102''"""
        self.assertEqual(LOC_array_gen(s), [['11', "IG28983'"], ['389', "SOL23'"], ['3523', "SE'"], ['36253', "HF'"], ['449', "FW9089'"]])
        # check that LOC_array_gen fails when the separator is not a string
        #with self.assertRaises(TypeError):
         #   LOC_array_gen(2)

if __name__ == '__main__':
    unittest.main()