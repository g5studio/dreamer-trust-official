const mobileModelList = {
  Huawei: {
    regex:
      '(HW-)?(?:Huawei|MediaPad T1|Ideos|Honor[ _]?|(?:(?:AGS|AGS2|ALE|ALP|AMN|ANA|ANE|ARE|ARS|ASK|ATH|ATU|AUM|BAC|BAH[23]?|BG2|BGO|B[ZK]K|BKL|BL[ALN]|BND|BTV|CA[GMNZ]|CH[CM]|CHE[12]?|CLT|CMR|COL|COR|CPN|CRO|CRR|CUN|DIG|DLI|DRA|DUA|DUB|DUK|EDI|ELE|EML|EVA|EVR|FDR|FIG|FLA|FRD|FRL|GEM|GRA|HDN|HLK|HMA|Hol|HRY|HWI|H[36]0|INE|JAT|JEF|JDN|JDN2|JKM|JMM|JSN|KII|KIW|KNT|KOB|KSA|LDN|LEO|LIO|LLD|LND|LON|LRA|LUA|LY[AO]|MAR|MHA|MRD|MYA|NCE|NEM|NEO|NXT|PAR|PCT|PIC|PLE|PLK|POT|PPA|PRA|RIO|RNE|RVL|SCC|SCL|SCM|SEA|SHT|SLA|SNE|SPN|STF|STK|TAG|TIT|TNY|TRT|VCE|VEN|VIE|VKY|VNS|VOG|VRD|VTR|WAS|YAL|G(?:527|620S|621|630|735)|Y(?:221|330|550|6[23]5))-(?:[A-Z]{0,2}[0-9]{1,4}[A-Z]{0,3}?)|H1711|U(?:8230|8500|8661|8665|8667|8800|8818|8860|9200|9508))(?:[);/ ]|$))|hi6210sft|PE-(UL00|TL[12]0|TL00M)|T1-(A21[Lw]|A23L|701u|823L)|G7-(?:L01|TL00)|HW-01K|JNY-(LX[12]|AL10)|OXF-AN[01]0|TAS-(A[LN]00|L29|TL00)|WLZ-(AL10|AN00)|NIC-LX1A|MRX-(AL09|W09)|CDY-(?:[AT]N00|AN90|NX9A)|GLK-(?:[AT]L00|LX1U)|JER-[AT]N10|ELS-(?:[AT]N[10]0|NX9|N39|N04)|AKA-(AL10|L29)|MON-(W|AL)19|BMH-AN[12]0|AQM-([AT]L[01]0|LX1)|MOA-(AL[02]0|LX9N)|NTS-AL00|ART-(?:[AT]L00[xm]|L29N?|L28)|MED-(?:[AT]L00|LX9N?)|EBG-(?:AN[01]0|TN00)|ANA-(?:[AT]N00|NX9)|BZ[AK]-W00|BZT-(W09|AL[01]0)|HDL-(AL09|W09)|HWV3[123]|HW-02L|TEL-[AT]N(?:00a?|10)|KKG-AN00|MXW-AN00|JKM-AL00[ab]|TAH-(?:N29|AN00)m|C8817D|T1-821W|d-01[JK]|d-02[HK]|KRJ-W09|HWT31|Y320-U10|Y541-U02|VAT-L19|70[14]HW|60[58]HW|NOH-(?:NX9|AN00)|TNNH-AN00|LIO-(?:[TA]L00|[LN]29|AN00)|KOB2-[LW]09|AGS3-[WL]09|DNN-LX9|NEY-NX9|LON-AL00|HLK-L41|503HW|AGR-[LW]09|PPA-LX[12]|ANG-AN00|NOP-AN00',
    device: 'smartphone',
    models: [
      {
        regex: 'POT-[TA]L00a(?:[);/ ]|$)',
        model: '9S',
      },
      {
        regex: 'U9500(?:[);/ ]|$)',
        model: 'Ascend D1',
      },
      {
        regex: 'Z100-UL00(?:[);/ ]|$)',
        model: 'Ascend D3',
      },
      {
        regex: 'Y320-(?:U10|T00|U05)(?:[);/ ]|$)',
        model: 'Ascend Y320',
      },
      {
        regex: 'Y330-U05(?:[);/ ]|$)',
        model: 'Ascend Y330',
      },
      {
        regex: 'Y541-U02(?:[);/ ]|$)',
        model: 'Ascend Y5C',
      },
      {
        regex: 'U8818(?:[);/ ]|$)',
        model: 'Ascend G300',
      },
      {
        regex: 'G527-U081(?:[);/ ]|$)',
        model: 'Ascend G527',
      },
      {
        regex: '(G620S-L0[13]|C8817D)(?:[);/ ]|$)',
        model: 'Ascend G620S',
      },
      {
        regex: 'G630-U251(?:[);/ ]|$)',
        model: 'Ascend G630',
      },
      {
        regex: 'G7-(?:L01|TL00)(?:[);/ ]|$)',
        model: 'Ascend G7',
      },
      {
        regex: 'P7-L10(?:[);/ ]|$)',
        model: 'Ascend P7',
      },
      {
        regex: 'G730-C00(?:[);/ ]|$)',
        model: 'Ascend G730',
      },
      {
        regex: 'U9200(?:[);/ ]|$)',
        model: 'Ascend P1',
      },
      {
        regex: 'H1711(?:[);/ ]|$)',
        model: 'Ascend XT2',
      },
      {
        regex: 'Y221-U(?:[12]2|[0345]3)(?:[);/ ]|$)',
        model: 'Ascend Y221',
      },
      {
        regex: 'Y550-L03(?:[);/ ]|$)',
        model: 'Ascend Y550',
      },
      {
        regex: 'ART-[AT]L00[xm](?:[);/ ]|$)',
        model: 'Enjoy 10',
      },
      {
        regex: 'STK-[AT]L00(?:[);/ ]|$)',
        model: 'Enjoy 10 Plus',
      },
      {
        regex: 'MED-[AT]L00(?:[);/ ]|$)',
        model: 'Enjoy 10E',
      },
      {
        regex: 'AQM-[AT]L00(?:[);/ ]|$)',
        model: 'Enjoy 10S',
      },
      {
        regex: 'TAG-[ACT]L00(?:[);/ ]|$)',
        model: 'Enjoy 5S',
      },
      {
        regex: 'NCE-(AL[10]0|TL10)(?:[);/ ]|$)',
        model: 'Enjoy 6',
      },
      {
        regex: 'DIG-(?:TL10|AL00)(?:[);/ ]|$)',
        model: 'Enjoy 6S',
      },
      {
        regex: 'SLA-(?:AL00|TL10)(?:[);/ ]|$)',
        model: 'Enjoy 7',
      },
      {
        regex: 'FIG-(?:[AT]L[10]0)(?:[);/ ]|$)',
        model: 'Enjoy 7S',
      },
      {
        regex: '(?:TRT-AL00[A]?|TRT-TL10A)(?:[);/ ]|$)',
        model: 'Enjoy 7 Plus',
      },
      {
        regex: 'LDN-(?:AL[12]0|TL[02]0)(?:[);/ ]|$)',
        model: 'Enjoy 8',
      },
      {
        regex: 'FLA-AL10(?:[);/ ]|$)',
        model: 'Enjoy 8 Plus',
      },
      {
        regex: 'ATU-[AT]L10(?:[);/ ]|$)',
        model: 'Enjoy 8e',
      },
      {
        regex: 'MRD-[TA]L00(?:[);/ ]|$)',
        model: 'Enjoy 9e',
      },
      {
        regex: 'DVC-TN20(?:[);/ ]|$)',
        model: 'Enjoy 20 Pro',
      },
      {
        regex: 'U8665(?:[);/ ]|$)',
        model: 'Fusion 2',
      },
      {
        regex: 'MED-LX9N?(?:[);/ ]|$)',
        model: 'Y6p',
      },
      {
        regex: 'G735-L(?:03|12|23)(?:[);/ ]|$)',
        model: 'G Play',
      },
      {
        regex: 'CHC-U(?:0[13]|23)(?:[);/ ]|$)',
        model: 'G Play Mini',
      },
      {
        regex: '(?:Honor_|HW-)?G621-TL00M?(?:[);/ ]|$)',
        model: 'G621',
      },
      {
        regex: 'DIG-L2[12](?:[);/ ]|$)',
        model: 'GR3 (2017)',
      },
      {
        regex: 'KII-L21(?:[);/ ]|$)',
        model: 'GR5',
      },
      {
        regex: 'BLL-L2[12](?:[);/ ]|$)',
        model: 'GR5 (2017)',
      },
      {
        regex: 'RIO-L03(?:[);/ ]|$)',
        model: 'GX8',
      },
      {
        regex: 'U8860(?:[);/ ]|$)',
        model: 'Honor',
      },
      {
        regex: 'COL-(?:AL[01]0|TL[01]0|L29)(?:[);/ ]|$)',
        model: 'Honor 10',
      },
      {
        regex: 'HRY-(?:[AT]L00[A]?|LX[12]|LX1MEB)(?:[);/ ]|$)',
        model: 'Honor 10 Lite',
      },
      {
        regex: 'HRY-LX1T(?:[);/ ]|$)',
        model: 'Honor 10I',
      },
      {
        regex: 'U9508(?:[);/ ]|$)',
        model: 'Honor 2',
      },
      {
        regex: 'YAL-(?:L21|[AT]L00)(?:[);/ ]|$)',
        model: 'Honor 20',
      },
      {
        regex: 'LRA-AL00(?:[);/ ]|$)',
        model: 'Honor 20 Lite',
      },
      {
        regex: '(HRY-AL00T[a]?)(?:[);/ ]|$)',
        model: 'Honor 20I',
      },
      {
        regex: 'YAL-(L41|AL10)(?:[);/ ]|$)',
        model: 'Honor 20 Pro',
      },
      {
        regex: '(MAR-LX1H|YAL-AL50)(?:[);/ ]|$)',
        model: 'Honor 20S',
      },
      {
        regex: '(?:BMH-AN[12]0|MXW-AN00)(?:[);/ ]|$)',
        model: 'Honor 30',
      },
      {
        regex: 'EBG-[AT]N00(?:[);/ ]|$)',
        model: 'Honor 30 Pro',
      },
      {
        regex: 'EBG-AN10(?:[);/ ]|$)',
        model: 'Honor 30 Pro Plus',
      },
      {
        regex: 'CDY-(?:AN90|NX9A)(?:[);/ ]|$)',
        model: 'Honor 30S',
      },
      {
        regex: 'LRA-LX1(?:[);/ ]|$)',
        model: 'Honor 30I',
      },
      {
        regex: '(?:Honor_|HW-)?H30-(?:C00|L01M?|L02|U10|T00|T10)(?:_TD)?(?:[);/ ]|$)',
        model: 'Honor 3C',
      },
      {
        regex: 'Hol-U19(?:[);/ ]|$)',
        model: 'Honor 3C Lite',
      },
      {
        regex: 'G750-T01(?:[);/ ]|$)',
        model: 'Honor 3X',
      },
      {
        regex: '(?:Honor_|HW-)?SCL-(?:AL00|CL00|TL00H?)(?:_TD)?(?:[);/ ]|$)',
        model: 'Honor 4A',
      },
      {
        regex: '(?:Honor_|HW-)?CHM-U01(?:_TD)?(?:[);/ ]|$)',
        model: 'Honor 4C',
      },
      {
        regex: 'Honor 4c Pro(?:[);/ ]|$)',
        model: 'Honor 4C Pro',
      },
      {
        regex: 'AQM-AL10(?:[);/ ]|$)',
        model: 'Honor 4T Pro',
      },
      {
        regex: '(CHE2?-[UT]L00[HM]?|CHE1-CL[12]0|CHE2-L(?:1[12]|23)|Che1-L04|CHE-TL00)(?:[);/ ]|$)',
        model: 'Honor 4X',
      },
      {
        regex: '(?:Honor_|HW-)?CUN-[AT]L00(?:[);/ ]|$)',
        model: 'Honor 5 Play',
      },
      {
        regex: '(?:Honor_|HW-)?CAM-(?:AL00|TL00H|TL00)(?:_TD)?(?:[);/ ]|$)',
        model: 'Honor 5A',
      },
      {
        regex: '(?:Honor_|HW-)?NEM-(?:AL10|L51|UL10|TL00)(?:[);/ ]|$)',
        model: 'Honor 5C',
      },
      {
        regex: '(?:Honor_|HW-)?NEM-(?:L22|TL00H)(?:[);/ ]|$)',
        model: 'Honor 5C Dual SIM',
      },
      {
        regex: '(?:Honor_|HW-)?KIW-(?:AL10|TL00H|[TC]L00|L2[1-4]|UL00)(?:_TD)?(?:[);/ ]|$)',
        model: 'Honor 5X',
      },
      {
        regex: '((?:Honor_|HW-)?H60-L(?:01|02|03|04|11|12)(?:_TD)?|HW-H60-J1)(?:[);/ ]|$)',
        model: 'Honor 6',
      },
      {
        regex: 'MYA-TL10(?:[);/ ]|$)',
        model: 'Honor 6 Play',
      },
      {
        regex: 'PE-(UL00|TL[12]0|TL00M)(?:[);/ ]|$)',
        model: 'Honor 6 Plus',
      },
      {
        regex: '(?:HONOR[ _]?)?DLI-(?:AL10|L[24]2|TL20)(?:[);/ ]|$)',
        model: 'Honor 6A',
      },
      {
        regex: 'DIG-L21HN(?:[);/ ]|$)',
        model: 'Honor 6C',
      },
      {
        regex: 'JMM-L22(?:[);/ ]|$)',
        model: 'Honor 6C Pro',
      },
      {
        regex: '(?:HONOR[ _]?)?BLN-(?:L2[124]|AL[1234]0|TL[01]0(?:[);/ ]|$))',
        model: 'Honor 6X',
      },
      {
        regex: '(?:Honor[_]?|HW-)?PLK-(?:AL10|CL00|TL00|TL01H?|UL00|L01)(?:[);/ ]|$)',
        model: 'Honor 7',
      },
      {
        regex: '(?:Honor_|HW-)?NEM-L21(?:[);/ ]|$)',
        model: 'Honor 7 Lite',
      },
      {
        regex: 'AUM-(?:AL[20]0|L33[A]?|TL20)(?:[);/ ]|$)',
        model: 'Honor 7A',
      },
      {
        regex: 'AUM-L29(?:[);/ ]|$)',
        model: 'Honor 7A Pro',
      },
      {
        regex: '(?:Honor_|HW-)?(?:LND-(?:AL[34]0|L29|TL40)|AUM-L41)(?:[);/ ]|$)',
        model: 'Honor 7C',
      },
      {
        regex: 'ATH-(?:[CAU]L00|TL00H)(?:[);/ ]|$)',
        model: 'Honor 7i',
      },
      {
        regex: '(?:Honor_|HW-)?DUA-(?:L22|LX3)(?:[);/ ]|$)',
        model: 'Honor 7S',
      },
      {
        regex: '(?:HONOR[ _]?)?BND-(?:AL[01]0|TL10|L2[14]|L31)(?:[);/ ]|$)',
        model: 'Honor 7X',
      },
      {
        regex: '(?:FRD-(?:AL[01]0|L0[249]|L1[49]|DL00)|VAT-L19)(?:[);/ ]|$)',
        model: 'Honor 8',
      },
      {
        regex: 'PRA-(?:AL00X|AL00|TL10)(?:[);/ ]|$)',
        model: 'Honor 8 Lite',
      },
      {
        regex: 'DUK-(?:L09|TL30)(?:[);/ ]|$)',
        model: 'Honor 8 Pro',
      },
      {
        regex: 'VEN-L22(?:[);/ ]|$)',
        model: 'Honor 8 Smart',
      },
      {
        regex: 'JAT-L(29|X[13])(?:[);/ ]|$)',
        model: 'Honor 8A',
      },
      {
        regex: 'JAT-L41(?:[);/ ]|$)',
        model: 'Honor 8A Pro',
      },
      {
        regex: 'BKK-(?:AL[10]0|L21|L22|LX2|TL00)(?:[);/ ]|$)',
        model: 'Honor 8C',
      },
      {
        regex: 'KSA-(LX[239]|AL00)(?:[);/ ]|$)',
        model: 'Honor 8S',
      },
      {
        regex: 'JSN-L(?:2[123]|42)|JSN-[TA]L00[a]?(?:[);/ ]|$)',
        model: 'Honor 8X',
      },
      {
        regex: 'ARE-(?:AL[10]0|L22(?:HN)?|TL00)(?:[);/ ]|$)',
        model: 'Honor 8X Max',
      },
      {
        regex: 'STF-(?:AL[10]0|L09S?|TL10)(?:[);/ ]|$)',
        model: 'Honor 9',
      },
      {
        regex: 'MOA-LX9N(?:[);/ ]|$)',
        model: 'Honor 9A',
      },
      {
        regex: 'AKA-L29(?:[);/ ]|$)',
        model: 'Honor 9C',
      },
      {
        regex: 'LLD-(?:AL[01]0|L[23]1|TL10)(?:[);/ ]|$)',
        model: 'Honor 9 Lite',
      },
      {
        regex: 'LLD-AL[23]0(?:[);/ ]|$)',
        model: 'Honor 9i',
      },
      {
        regex: 'DUA-LX9(?:[);/ ]|$)',
        model: 'Honor 9S',
      },
      {
        regex: 'HLK-AL00a?(?:[);/ ]|$)',
        model: 'Honor 9X',
      },
      {
        regex: 'HLK-(?:AL10|L4[12])(?:[);/ ]|$)',
        model: 'Honor 9X Pro',
      },
      {
        regex: 'CAM-UL00(?:[);/ ]|$)',
        model: 'Honor Holly 3',
      },
      {
        regex: 'NTS-AL00(?:[);/ ]|$)',
        model: 'Honor Magic',
      },
      {
        regex: 'TNY-[AT]L00(?:[);/ ]|$)',
        model: 'Honor Magic 2',
      },
      {
        regex: 'RVL-AL09(?:[);/ ]|$)',
        model: 'Honor Note 10',
      },
      {
        regex: 'EDI-AL10(?:[);/ ]|$)',
        model: 'Honor Note 8',
      },
      {
        regex: 'VKY-TL00(?:[);/ ]|$)',
        model: 'Honor P10 Plus',
      },
      {
        regex: 'VOG-AL00(?:[);/ ]|$)',
        model: 'Honor P30 Pro',
      },
      {
        regex: 'ANA-(?:[AT]N00|NX9)(?:[);/ ]|$)',
        model: 'Honor P40',
      },
      {
        regex: 'COR-(?:AL[01]0|L29|TL10)(?:[);/ ]|$)',
        model: 'Honor Play',
      },
      {
        regex: 'ASK-AL00x(?:[);/ ]|$)',
        model: 'Honor Play 3',
      },
      {
        regex: 'KSA-AL10(?:[);/ ]|$)',
        model: 'Honor Play 3E',
      },
      {
        regex: 'TNNH-AN00(?:[);/ ]|$)',
        model: 'Honor Play 4',
      },
      {
        regex: 'CHM-[CUT]L00[HM]?(?:[);/ ]|$)',
        model: 'Honor Play 4C',
      },
      {
        regex: 'AKA-AL10(?:[);/ ]|$)',
        model: 'Honor Play 4T',
      },
      {
        regex: 'DUA-[TA]L00(?:[);/ ]|$)',
        model: 'Honor Play 7',
      },
      {
        regex: 'JAT-[AT]L00(?:[);/ ]|$)',
        model: 'Honor Play 8A',
      },
      {
        regex: 'MOA-AL[02]0(?:[);/ ]|$)',
        model: 'Honor Play 9A',
      },
      {
        regex: 'BKL-(?:AL00|AL20|AL30|L09|TL10)(?:[);/ ]|$)',
        model: 'Honor V10',
      },
      {
        regex: 'PCT-[TA]L10(?:[);/ ]|$)',
        model: 'Honor V20',
      },
      {
        regex: 'KNT-(?:AL[12]0|[TU]L10)(?:[);/ ]|$)',
        model: 'Honor V8',
      },
      {
        regex: 'DUK-AL20(?:[);/ ]|$)',
        model: 'Honor V9',
      },
      {
        regex: 'JMM-[AT]L[01]0(?:[);/ ]|$)',
        model: 'Honor V9 Play',
      },
      {
        regex: 'BKL-L04(?:[);/ ]|$)',
        model: 'Honor View 10',
      },
      {
        regex: 'PCT-L29(?:[);/ ]|$)',
        model: 'Honor View 20',
      },
      {
        regex: 'OXF-AN00(?:[);/ ]|$)',
        model: 'Honor View 30',
      },
      {
        regex: 'OXF-AN10(?:[);/ ]|$)',
        model: 'Honor View 30 Pro',
      },
      {
        regex: '(?:Honor_|HW-)?SCL-L(01|32)(?:_TD)?(?:[);/ ]|$)',
        model: 'Honor Y6',
      },
      {
        regex: '(?:Honor_|HW-)?LYO-L21(?:[);/ ]|$)',
        model: 'Honor Y6 II Compact',
      },
      {
        regex: 'TEL-(?:AN(?:00a?|10)|TN00)(?:[);/ ]|$)',
        model: 'Honor X10',
      },
      {
        regex: 'KKG-AN00(?:[);/ ]|$)',
        model: 'Honor X10 Max',
      },
      {
        regex: 'DNN-LX9(?:[);/ ]|$)',
        model: 'Honor X10 Lite',
      },
      {
        regex: 'U8500(?:[);/ ]|$)',
        model: 'Ideos X2',
      },
      {
        regex: 'U8510(?:[);/ ]|$)',
        model: 'Ideos X3',
      },
      {
        regex: 'U8800(?:[);/ ]|$)',
        model: 'Ideos X5',
      },
      {
        regex: 'MLA-AL10(?:[);/ ]|$)',
        model: 'Maimang 5',
      },
      {
        regex: 'POT-AL10(?:[);/ ]|$)',
        model: 'Maimang 8',
      },
      {
        regex: 'TAH-(?:N29|AN00)m(?:[);/ ]|$)',
        model: 'Mate XS',
      },
      {
        regex: 'ALP-(?:[TA]L00|L[02]9)(?:[);/ ]|$)',
        model: 'Mate 10',
      },
      {
        regex: 'RNE-(?:AL00|L(?:01|03|21|23))(?:[);/ ]|$)',
        model: 'Mate 10 Lite',
      },
      {
        regex: 'BLA-(?:A09|L[02]9|[TA]L00)(?:[);/ ]|$)',
        model: 'Mate 10 Pro',
      },
      {
        regex: 'HMA-(?:[AT]L00|L[02]9)(?:[);/ ]|$)',
        model: 'Mate 20',
      },
      {
        regex: 'SNE-(?:AL00|LX[0-3])(?:[);/ ]|$)',
        model: 'Mate 20 Lite',
      },
      {
        regex: 'LYA-(?:AL[01]0|L[02]9|L0C|TL00)(?:[);/ ]|$)',
        model: 'Mate 20 Pro',
      },
      {
        regex: 'LYA-AL00P(?:[);/ ]|$)',
        model: 'Mate 20 RS',
      },
      {
        regex: 'EVR-(?:[TA]L00|L29|N29|AN00)(?:[);/ ]|$)',
        model: 'Mate 20 X',
      },
      {
        regex: 'TAS-([AT]L00|L29)(?:[);/ ]|$)',
        model: 'Mate 30',
      },
      {
        regex: 'TAS-AN00(?:[);/ ]|$)',
        model: 'Mate 30 5G',
      },
      {
        regex: 'SPN-AL00(?:[);/ ]|$)',
        model: 'Mate 30 Lite',
      },
      {
        regex: 'LIO-(?:[TA]L00|L29|AN00)(?:[);/ ]|$)',
        model: 'Mate 30 Pro',
      },
      {
        regex: 'LIO-N29(?:[);/ ]|$)',
        model: 'Mate 30 Pro 5G',
      },
      {
        regex: 'NOH-(?:NX9|AN00)(?:[);/ ]|$)',
        model: 'Mate 40 Pro',
      },
      {
        regex: 'NOP-AN00(?:[);/ ]|$)',
        model: 'Mate 40 Pro+',
      },
      {
        regex: 'NXT-(?:AL10|L29)(?:[);/ ]|$)',
        model: 'Mate 8',
      },
      {
        regex: 'MHA-(?:L[02]9|[AT]L00)(?:[);/ ]|$)',
        model: 'Mate 9',
      },
      {
        regex: 'BLL-L23(?:[);/ ]|$)',
        model: 'Mate 9 Lite',
      },
      {
        regex: 'LON-(?:AL00(?:-PD)?|L29)(?:[);/ ]|$)',
        model: 'Mate 9 Pro',
      },
      {
        regex: 'NEO-AL00(?:[);/ ]|$)',
        model: 'Mate RS',
      },
      {
        regex: 'NEO-L29(?:[);/ ]|$)',
        model: 'Mate RS Porsche Design',
      },
      {
        regex: 'CRR-(?:L09|UL00)(?:[);/ ]|$)',
        model: 'Mate S',
      },
      {
        regex: 'BND-L34(?:[);/ ]|$)',
        model: 'Mate SE',
      },
      {
        regex: '(CAZ-(?:AL[01]0|TL[12]0)|CAN-L[01][1-3])(?:[);/ ]|$)',
        model: 'Nova',
      },
      {
        regex: '608HW(?:[);/ ]|$)',
        model: 'Nova Lite',
      },
      {
        regex: '(?:PIC-(?:[AT]L00|LX9)|HWV31)(?:[);/ ]|$)',
        model: 'Nova 2',
      },
      {
        regex: '704HW(?:[);/ ]|$)',
        model: 'Nova 2 Lite',
      },
      {
        regex: 'BAC-(?:L01|TL00)(?:[);/ ]|$)',
        model: 'Nova 2 Plus',
      },
      {
        regex: 'BAC-(?:AL00|L2[12])(?:[);/ ]|$)',
        model: 'Nova 2 Plus Dual SIM',
      },
      {
        regex: 'RNE-L[02]2(?:[);/ ]|$)',
        model: 'Nova 2I',
      },
      {
        regex: 'HWI-[AT]L00(?:[);/ ]|$)',
        model: 'Nova 2S',
      },
      {
        regex: 'PAR-(?:[AT]L00|LX[19]|LX1M|TL20)(?:[);/ ]|$)',
        model: 'Nova 3',
      },
      {
        regex: 'ANE-AL00(?:[);/ ]|$)',
        model: 'Nova 3e',
      },
      {
        regex: 'INE-(?:AL00|LX[12]r|LX[12]|TL00)(?:[);/ ]|$)',
        model: 'Nova 3i',
      },
      {
        regex: 'VCE-(L22|[AT]L00)(?:[);/ ]|$)',
        model: 'Nova 4',
      },
      {
        regex: 'MAR-AL00(?:[);/ ]|$)',
        model: 'Nova 4e',
      },
      {
        regex: 'SEA-AL00(?:[);/ ]|$)',
        model: 'Nova 5',
      },
      {
        regex: 'SEA-AL10(?:[);/ ]|$)',
        model: 'Nova 5 Pro',
      },
      {
        regex: 'GLK-(?:[AT]L00|LX1U)(?:[);/ ]|$)',
        model: 'Nova 5i',
      },
      {
        regex: 'SPN-TL00(?:[);/ ]|$)',
        model: 'Nova 5i Pro',
      },
      {
        regex: 'WLZ-AL10(?:[);/ ]|$)',
        model: 'Nova 6',
      },
      {
        regex: 'WLZ-AN00(?:[);/ ]|$)',
        model: 'Nova 6 5G',
      },
      {
        regex: 'JNY-AL10(?:[);/ ]|$)',
        model: 'Nova 6 SE',
      },
      {
        regex: 'JEF-(?:[AT]N00|AN20|NX9)(?:[);/ ]|$)',
        model: 'Nova 7 5G',
      },
      {
        regex: 'JER-[AT]N10(?:[);/ ]|$)',
        model: 'Nova 7 Pro 5G',
      },
      {
        regex: 'CDY-(?:[AT]N00|NX9B)(?:[);/ ]|$)',
        model: 'Nova 7 SE 5G',
      },
      {
        regex: 'JNY-LX2(?:[);/ ]|$)',
        model: 'Nova 7i',
      },
      {
        regex: 'ANG-AN00(?:[);/ ]|$)',
        model: 'Nova 8 5G',
      },
      {
        regex: 'DIG-L01(?:[);/ ]|$)',
        model: 'Nova Smart',
      },
      {
        regex: 'WAS-AL00(?:[);/ ]|$)',
        model: 'Nova Youth',
      },
      {
        regex: 'FIG-L(?:A1|X[123])(?:[);/ ]|$)',
        model: 'P smart',
      },
      {
        regex: 'POT-(?:LX(?:[13]|1T|2J|1AF)|AL00)(?:[);/ ]|$)',
        model: 'P smart (2019)',
      },
      {
        regex: 'POT-LX1A(?:[);/ ]|$)',
        model: 'P smart (2020)',
      },
      {
        regex: 'PPA-LX[12](?:[);/ ]|$)',
        model: 'P smart (2021)',
      },
      {
        regex: 'STK-LX1(?:[);/ ]|$)',
        model: 'P smart Z',
      },
      {
        regex: 'VTR-(?:L[02]9|AL00|TL00)(?:[);/ ]|$)',
        model: 'P10',
      },
      {
        regex: 'WAS-(?:L(?:X1|X1A|X2|X2J|X3|03T)|TL10)(?:[);/ ]|$)',
        model: 'P10 Lite',
      },
      {
        regex: 'VKY-(?:AL00|L09|L29)(?:[);/ ]|$)',
        model: 'P10 Plus',
      },
      {
        regex: 'BAC-L[02]3(?:[);/ ]|$)',
        model: 'P10 Selfie',
      },
      {
        regex: 'EML-(?:[TA]L00|L[02]9)(?:[);/ ]|$)',
        model: 'P20',
      },
      {
        regex: '(?:ANE-(?:LX[123]|LX2J|TL00)|HWV32)(?:[);/ ]|$)',
        model: 'P20 Lite',
      },
      {
        regex: '(?:CLT-(?:AL0[01]|TL0[01]|L(?:04|[02]9))|HW-01K)(?:[);/ ]|$)',
        model: 'P20 Pro',
      },
      {
        regex: '(ELE-L(?:04|09|29)|ELE-[AT]L00)(?:[);/ ]|$)',
        model: 'P30',
      },
      {
        regex: '(?:MAR-(?:LX(?:1[BM]|2J?|3BM)|TL00)|NIC-LX1A|HWV33)(?:[);/ ]|$)',
        model: 'P30 Lite',
      },
      {
        regex: 'MAR-LX[13]Am?(?:[);/ ]|$)',
        model: 'P30 Lite Dual SIM',
      },
      {
        regex: '(?:VOG-(?:L(?:04|09|29)|TL00|AL10)|HW-02L)(?:[);/ ]|$)',
        model: 'P30 Pro',
      },
      {
        regex: 'ANA-LX4(?:[);/ ]|$)',
        model: 'P40',
      },
      {
        regex: 'JNY-LX1(?:[);/ ]|$)',
        model: 'P40 Lite',
      },
      {
        regex: 'ART-L29(?:[);/ ]|$)',
        model: 'P40 Lite E',
      },
      {
        regex: 'ART-L29N(?:[);/ ]|$)',
        model: 'P40 Lite E NFC',
      },
      {
        regex: '(?:ELS-(?:[AT]N00|NX9|N04)|NEY-NX9)(?:[);/ ]|$)',
        model: 'P40 Pro',
      },
      {
        regex: 'ELS-(?:AN10|N39)(?:[);/ ]|$)',
        model: 'P40 Pro Plus',
      },
      {
        regex: 'GRA-(?:L09|UL00)(?:[);/ ]|$)',
        model: 'P8',
      },
      {
        regex: '(?:ALE-L(?:02|21|23)|ALE-UL00|ALE-TL00|503HW)(?:[);/ ]|$)',
        model: 'P8 Lite (2015)',
      },
      {
        regex: '(?:PRA-L(?:A1|X2|X1|X3)|hi6210sft)(?:[);/ ]|$)',
        model: 'P8 Lite (2017)',
      },
      {
        regex: 'EVA-(?:AL[10]0|L[012]9|[TCD]L00)(?:[);/ ]|$)',
        model: 'P9',
      },
      {
        regex: 'VNS-L(?:[23]1|[26]2)(?:[);/ ]|$)',
        model: 'P9 Lite',
      },
      {
        regex: 'SLA-L(?:02|03|22|23)(?:[);/ ]|$)',
        model: 'P9 Lite Mini',
      },
      {
        regex: 'DIG-L(?:03|23)(?:[);/ ]|$)',
        model: 'P9 Lite Smart',
      },
      {
        regex: 'VIE-(?:AL10|L[02]9)(?:[);/ ]|$)',
        model: 'P9 Plus',
      },
      {
        regex: 'ATH-UL0[16](?:[);/ ]|$)',
        model: 'ShotX',
      },
      {
        regex: 'U(8230|8661|8667)(?:[);/ ]|$)',
        model: 'U$1',
      },
      {
        regex: 'ARS-([AT]L00|L22)(?:[);/ ]|$)',
        model: 'Y Max',
      },
      {
        regex: 'CRO-(?:L[02]2|U00)(?:[);/ ]|$)',
        model: 'Y3 (2017)',
      },
      {
        regex: 'CAG-L[02]2(?:[);/ ]|$)',
        model: 'Y3 (2018)',
      },
      {
        regex: 'LUA-(U22|L2[12]|U03)(?:[);/ ]|$)',
        model: 'Y3II',
      },
      {
        regex: 'MYA-(?:L(?:02|03|2[23])|U29)(?:[);/ ]|$)',
        model: 'Y5 (2017)',
      },
      {
        regex: 'DRA-L(?:01|03|21|23|X3)(?:[);/ ]|$)',
        model: 'Y5 (2018)',
      },
      {
        regex: 'AMN-LX[1239](?:[);/ ]|$)',
        model: 'Y5 (2019)',
      },
      {
        regex: 'DRA-LX5(?:[);/ ]|$)',
        model: 'Y5 lite',
      },
      {
        regex: 'DRA-LX9(?:[);/ ]|$)',
        model: 'Y5p',
      },
      {
        regex: 'CRO-L[02]3(?:[);/ ]|$)',
        model: 'Y5 Lite (2017)',
      },
      {
        regex: 'CAG-L[02]3(?:[);/ ]|$)',
        model: 'Y5 Lite (2018)',
      },
      {
        regex: 'DRA-(?:LX2|[AT]L00)(?:[);/ ]|$)',
        model: 'Y5 Prime (2018)',
      },
      {
        regex: 'MYA-L13(?:[);/ ]|$)',
        model: 'Y5 Pro (2017)',
      },
      {
        regex: 'CUN-(?:L(?:0[123]|2[123]|33)|U29)(?:[);/ ]|$)',
        model: 'Y5II',
      },
      {
        regex: '(?:SCC-U21|SCL-U31)(?:[);/ ]|$)',
        model: 'Y6',
      },
      {
        regex: 'MYA-L11(?:[);/ ]|$)',
        model: 'Y6 (2016)',
      },
      {
        regex: 'MYA-(L41|AL10)(?:[);/ ]|$)',
        model: 'Y6 (2017)',
      },
      {
        regex: 'ATU-L(?:11|21|22|X3)(?:[);/ ]|$)',
        model: 'Y6 (2018)',
      },
      {
        regex: 'MRD-L(?:X1[NF]?|X3)(?:[);/ ]|$)',
        model: 'Y6 (2019)',
      },
      {
        regex: 'ATU-L(?:31|42)(?:[);/ ]|$)',
        model: 'Y6 Prime (2018)',
      },
      {
        regex: 'TIT-(?:AL00|L01|U02)(?:[);/ ]|$)',
        model: 'Y6 Pro',
      },
      {
        regex: 'MRD-LX2(?:[);/ ]|$)',
        model: 'Y6 Pro (2019)',
      },
      {
        regex: 'Y625-U03(?:[);/ ]|$)',
        model: 'Y625',
      },
      {
        regex: 'Y635-L0[123](?:[);/ ]|$)',
        model: 'Y635',
      },
      {
        regex: 'Y635-L21(?:[);/ ]|$)',
        model: 'Y635 Dual SIM',
      },
      {
        regex: 'CAM-L(?:03|21|23|32)(?:[);/ ]|$)',
        model: 'Y6II',
      },
      {
        regex: 'TRT-LX[123](?:[);/ ]|$)',
        model: 'Y7 (2017)',
      },
      {
        regex: 'LDN-L(?:01|X3)(?:[);/ ]|$)',
        model: 'Y7 (2018)',
      },
      {
        regex: '(?:HUAWEI[ _]?)?DUB-(?:LX[13]|TL00)(?:[);/ ]|$)',
        model: 'Y7 (2019)',
      },
      {
        regex: '(LDN-(?:AL00|L21)|TRT-TL10)(?:[);/ ]|$)',
        model: 'Y7 Prime',
      },
      {
        regex: '(LDN-(?:LX2|TL10)|TRT-(?:L21A|L53))(?:[);/ ]|$)',
        model: 'Y7 Prime (2018)',
      },
      {
        regex: 'DUB-(?:LX2|AL00)(?:[);/ ]|$)',
        model: 'Y7 Pro (2019)',
      },
      {
        regex: 'DUB-AL00a(?:[);/ ]|$)',
        model: 'Enjoy 9',
      },
      {
        regex: 'DUB-AL20(?:[);/ ]|$)',
        model: 'Y7 Pro (2019)',
      },
      {
        regex: 'PPA-LX3(?:[);/ ]|$)',
        model: 'Y7a',
      },
      {
        regex: 'ART-L28(?:[);/ ]|$)',
        model: 'Y7p',
      },
      {
        regex: 'AQM-LX1(?:[);/ ]|$)',
        model: 'Y8p',
      },
      {
        regex: 'FLA-(LX[123]|AL20|TL10)(?:[);/ ]|$)',
        model: 'Y9 (2018)',
      },
      {
        regex: 'JKM-(?:[TA]L00[ab]?|LX[123])(?:[);/ ]|$)',
        model: 'Y9 (2019)',
      },
      {
        regex: 'STK-(L2[12]|LX3)(?:[);/ ]|$)',
        model: 'Y9 Prime (2019)',
      },
      {
        regex: 'FRL-L2[23](?:[);/ ]|$)',
        model: 'Y9a',
      },
      {
        regex: 'HWT31(?:[);/ ]|$)',
        model: 'Qua Tab 02 10.1"',
        device: 'tablet',
      },
      {
        regex: 'HDN-[LW]09(?:[);/ ]|$)',
        model: 'Honor Water Play 10.1',
        device: 'tablet',
      },
      {
        regex: 'BAH3-(?:AL00|[LW]09)(?:[);/ ]|$)',
        model: 'MatePad 10.4"',
        device: 'tablet',
      },
      {
        regex: 'BAH3-W59(?:[);/ ]|$)',
        model: 'MatePad 10.4" WiFi',
        device: 'tablet',
      },
      {
        regex: 'AGS3-[WL]09(?:[);/ ]|$)',
        model: 'MatePad T10s',
        device: 'tablet',
      },
      {
        regex: 'HDL-(?:W09|AL09)(?:[);/ ]|$)',
        model: 'Honor Water Play 8.0',
        device: 'tablet',
      },
      {
        regex: 'JDN-(?:AL00|W09)(?:[);/ ]|$)',
        model: 'Honor Pad 2',
        device: 'tablet',
      },
      {
        regex: 'KRJ-W09(?:[);/ ]|$)',
        model: 'Honor Pad V6',
        device: 'tablet',
      },
      {
        regex: 'MON-(W|AL)19(?:[);/ ]|$)',
        device: 'tablet',
        model: 'MatePad C5 8',
      },
      {
        regex: 'BZA-W00(?:[);/ ]|$)',
        device: 'tablet',
        model: 'C3 9.6',
      },
      {
        regex: 'M2-801L(?:[);/ ]|$)',
        device: 'tablet',
        model: 'MediaPad M2 8.0"',
      },
      {
        regex: 'MRX-(AL09|W09)(?:[);/ ]|$)',
        device: 'tablet',
        model: 'MatePad Pro',
      },
      {
        regex: 'CMR-(?:AL[01]9|W09)(?:[);/ ]|$)',
        device: 'tablet',
        model: 'MediaPad M5 10.8',
      },
      {
        regex: 'CMR-W19(?:[);/ ]|$)',
        device: 'tablet',
        model: 'MediaPad M5 Pro 10.8',
      },
      {
        regex: 'SCM-AL09(?:[);/ ]|$)',
        device: 'tablet',
        model: 'MediaPad M5 Pro',
      },
      {
        regex: 'GEM-70[1-3]L(?:[);/ ]|$)',
        device: 'tablet',
        model: 'MediaPad X2',
      },
      {
        regex: '(?:JDN2-(:?[WL]09|AL[50]0)|BAH2-(?:AL[01]0|L09|W[01]9))(?:[);/ ]|$)',
        device: 'tablet',
        model: 'MediaPad M5 Lite',
      },
      {
        regex: 'SHT-(?:AL|W)09(?:[);/ ]|$)',
        device: 'tablet',
        model: 'MediaPad M5 8.4',
      },
      {
        regex: 'VRD-(?:(AL|W)09|AL10|W10)(?:[);/ ]|$)',
        device: 'tablet',
        model: 'MediaPad M6 8.4',
      },
      {
        regex: 'SCM-W09(?:[);/ ]|$)',
        device: 'tablet',
        model: 'MediaPad M6 10',
      },
      {
        regex: 'BTV-W09(?:[);/ ]|$)',
        device: 'tablet',
        model: 'MediaPad M3 8',
      },
      {
        regex: '(BAH-W09|CPN-(?:L|W)09|CPN-AL00|701HW)(?:[);/ ]|$)',
        device: 'tablet',
        model: 'MediaPad M3 Lite',
      },
      {
        regex: 'BAH-(?:L09|AL00)(?:[);/ ]|$)',
        device: 'tablet',
        model: 'MediaPad M3 Lite 10',
      },
      {
        regex: 'BTV-DL09',
        device: 'tablet',
        model: 'MediaPad M3',
      },
      {
        regex: '(AGS2-AL00|JDN2-W09)HN(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Honor Tab 5',
      },
      {
        regex: 'AGS2-(?:[LW]09|W19|L03)(?:[);/ ]|$)',
        device: 'tablet',
        model: 'MediaPad T5 10',
      },
      {
        regex: 'KOB2-[LW]09(?:[);/ ]|$)',
        device: 'tablet',
        model: 'MediaPad T 8.0"',
      },
      {
        regex: 'AGR-[LW]09(?:[);/ ]|$)',
        device: 'tablet',
        model: 'MediaPad T 10',
      },
      {
        regex: 'AGS-(?:L0[39]|W09)(?:[);/ ]|$)',
        device: 'tablet',
        model: 'MediaPad T3 10',
      },
      {
        regex: '(KOB-(?:L|W)09|BZK-[LW]00)(?:[);/ ]|$)',
        device: 'tablet',
        model: 'MediaPad T3 8',
      },
      {
        regex: 'BG2-(?:U0[13]|W09)(?:[);/ ]|$)',
        device: 'tablet',
        model: 'MediaPad T3 7',
      },
      {
        regex: 'BGO-L03(?:[);/ ]|$)',
        device: 'tablet',
        model: 'MediaPad T2 7.0',
      },
      {
        regex: '(?:BGO-DL09|PLE-70[13]L)(?:[);/ ]|$)',
        device: 'tablet',
        model: 'MediaPad T2 7.0 Pro',
      },
      {
        regex: 'JDN-L01(?:[);/ ]|$)',
        device: 'tablet',
        model: 'MediaPad T2 8.0 Pro',
      },
      {
        regex: '(?:FDR-(A01[LW]|A03L)|605HW)(?:[);/ ]|$)',
        device: 'tablet',
        model: 'MediaPad T2 10.0" Pro',
      },
      {
        regex: 'T1-(?:A21[LW]|A23L)(?:[);/ ]|$)',
        device: 'tablet',
        model: 'MediaPad T1 10',
      },
      {
        regex: 'T1-701u(?:[);/ ]|$)',
        device: 'tablet',
        model: 'MediaPad T1 7',
      },
      {
        regex: '(?:T1-82(?:3L|1W)|MediaPad T1 8.0)(?:[);/ ]|$)',
        device: 'tablet',
        model: 'MediaPad T1 8',
      },
      {
        regex: 'AGS2-AL00(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Enjoy Tablet 10.1',
      },
      {
        regex: 'BZT-(W09|AL[01]0)(?:[);/ ]|$)',
        device: 'tablet',
        model: 'MediaPad C5 10.1',
      },
      {
        regex: '(?:d-01J|d-02[HK])(?:[);/ ]|$)',
        device: 'tablet',
        model: 'D Tab Compact',
      },
      {
        regex: '(d-01K)(?:[);/ ]|$)',
        device: 'tablet',
        model: 'dtab d-01K',
      },
      {
        regex: 'LEO-BX9(?:[);/ ]|$)',
        device: 'wearable',
        model: 'Smart Watch 2',
      },
      {
        regex: '(MediaPad[^/;]*) Build',
        device: 'tablet',
        model: '$1',
      },
      {
        regex: 'Ideos([^;/]*) Build',
        model: 'Ideos$1',
      },
      {
        regex: '(?:HUAWEI )?MT([0-9]+)',
        device: 'phablet',
        model: 'Ascend Mate $1',
      },
      {
        regex: 'Huawei[ _\\-]?([^/;]*) Build',
        model: '$1',
      },
      {
        regex: '(?:HW-)?Huawei(?!Browser)(?:/1\\.0/0?(?:Huawei))?[_\\- /]?([a-z0-9\\-_]+)',
        model: '$1',
      },
      {
        regex: 'Huawei; ([a-z0-9 \\-]+)',
        model: '$1',
      },
    ],
  },
  OPPO: {
    regex:
      '(?:OB-)?OPPO[ _]?([a-z0-9]+)|N1T|R8001|OPG01|A00[12]OP|(?:X90[07][0679]|U70[57]T?|X909T?|R(?:10[01]1|2001|201[07]|6007|7005|7007|80[13579]|81[13579]|82[01379]|83[013]|800[067]|8015|810[679]|811[13]|820[057])[KLSTW]?|N520[79]|N5117|A33f|A33fw|A37fw?|PAAM00|PAAT00|PAC[TM]00)(?:[);/ ]|$)|R7kf|R7plusf|R7Plusm|A1601|CPH[0-9]{4}|CPH19(69|79|23|1[179])|PB(A[TM]00|CT10|BT30|CM[13]0|[FD]M00)|P(DAM10|ADM00|AF[TM]00|ADT00|AHM00|BBM[03]0|BBT00|BDT00|BFT00|[CB]E[MT]00|CA[MT]00|C[CDG]M00|CA[MT]10|[CD]PM00|CRM00|CDT00|CD[TM]10|CHM[013]0|CKM[08]0|CLM[15]0|DEM[13]0|DHM00|DK[TM]00|DPT00|DB[TM]00|DCM00|[CD]NM00|DVM00|DY[TM]20|DNT00|EA[TM]00)|PDSM00',
    device: 'smartphone',
    models: [
      {
        regex: 'PCHM10(?:[);/ ]|$)',
        model: 'A11',
      },
      {
        regex: '(?:CPH2083|CPH2077)(?:[);/ ]|$)',
        model: 'A12',
      },
      {
        regex: 'PCHM00(?:[);/ ]|$)',
        model: 'A11x',
      },
      {
        regex: 'CPH1923(?:[);/ ]|$)',
        model: 'A1K',
      },
      {
        regex: '(?:OPPO[ _]?)?(CPH1837|PAD[TM]00)(?:[);/ ]|$)',
        model: 'A3',
      },
      {
        regex: '(?:OPPO[ _]?)?A37f(w)(?:[);/ ]|$)',
        model: 'A37f$1',
      },
      {
        regex: 'A37f(?:[);/ ]|$)',
        model: 'A37f',
      },
      {
        regex: '(?:OPPO[ _]?)?CPH1605(?:[);/ ]|$)',
        model: 'A39',
      },
      {
        regex: 'CPH20(?:81|73|31|15)(?:[);/ ]|$)',
        model: 'A31',
      },
      {
        regex: '(?:OPPO[ _]?)?(?:CPH18(?:0[35]|53)|PBBM30)(?:[);/ ]|$)',
        model: 'A3s',
      },
      {
        regex: '(?:OPPO[ _]?)?(?:CPH1809|PBA[TM]00|PBBT30)(?:[);/ ]|$)',
        model: 'A5',
      },
      {
        regex: 'CPH19(?:3[13]|43)(?:[);/ ]|$)',
        model: 'A5 (2020)',
      },
      {
        regex: 'PDVM00(?:[);/ ]|$)',
        model: 'A32',
      },
      {
        regex: '(?:PDAM10|CPH2069|CPH2061)(?:[);/ ]|$)',
        model: 'A52',
      },
      {
        regex: 'CPH2127(?:[);/ ]|$)',
        model: 'A53',
      },
      {
        regex: '(?:OPPO[ _]?)?CPH170[15](?:[);/ ]|$)',
        model: 'A57',
      },
      {
        regex: 'CPH19(?:09|1[02])(?:[);/ ]|$)',
        model: 'A5S',
      },
      {
        regex: '(?:OPPO[ _]?)?(?:CPH190[15]|PBF[TM]00)(?:[);/ ]|$)',
        model: 'A7',
      },
      {
        regex: '(?:OPPO[ _]?)?(CPH1801|CPH1717)(?:[);/ ]|$)',
        model: 'A71',
      },
      {
        regex: '(?:OPPO[ _]?)?(?:PDY[TM]20|CPH2067)(?:[);/ ]|$)',
        model: 'A72',
      },
      {
        regex: '(?:OPPO[ _]?)?CPH1715(?:[);/ ]|$)',
        model: 'A77',
      },
      {
        regex: 'PCD[TM]00(?:[);/ ]|$)',
        model: 'A7n',
      },
      {
        regex: '(PBBT00|PBBM00)(?:[);/ ]|$)',
        model: 'A7x',
      },
      {
        regex: '(?:OPPO[ _]?)?(?:PDBM00)(?:[);/ ]|$)',
        model: 'A8',
      },
      {
        regex: '(?:OPPO[ _]?)?CPH1729(?:[);/ ]|$)',
        model: 'A83',
      },
      {
        regex: '(?:OPPO[ _]?)?CPH1827(?:[);/ ]|$)',
        model: 'A83 (2018)',
      },
      {
        regex: 'PCA[TM]10(?:[);/ ]|$)',
        model: 'A9',
      },
      {
        regex: '(CPH1937|CPH1941|PCHM30)(?:[);/ ]|$)',
        model: 'A9 (2020)',
      },
      {
        regex: '(?:OPPO[ _]?)?CPH1938(?:[);/ ]|$)',
        model: 'A9 (EN)',
      },
      {
        regex: '(?:PCPM00|CPH20[02]1)(?:[);/ ]|$)',
        model: 'A91',
      },
      {
        regex: 'CPH2059(?:[);/ ]|$)',
        model: 'A92',
      },
      {
        regex: 'PDKT00(?:[);/ ]|$)',
        model: 'A92s',
      },
      {
        regex: 'PDKM00(?:[);/ ]|$)',
        model: 'A93s',
      },
      {
        regex: 'PCE[TM]00(?:[);/ ]|$)',
        model: 'A9x',
      },
      {
        regex: '(?:OPPO[ _]?)?CPH1851(?:[);/ ]|$)',
        model: 'AX5',
      },
      {
        regex: 'CPH1920(?:[);/ ]|$)',
        model: 'AX5s',
      },
      {
        regex: '(?:OPPO[ _]?)?CPH1903(?:[);/ ]|$)',
        model: 'AX7',
      },
      {
        regex: '(?:OPPO[ _]?)?X9009(?:[);/ ]|$)',
        model: 'F1 Plus',
      },
      {
        regex: 'CPH191[135](?:[);/ ]|$)',
        model: 'F11',
      },
      {
        regex: 'CPH19(?:69|87)(?:[);/ ]|$)',
        model: 'F11 Pro',
      },
      {
        regex: '(?:OPPO[ _]?)?(?:CPH2119)(?:[);/ ]|$)',
        model: 'F17 Pro',
      },
      {
        regex: '(?:OPPO[ _]?)?A1601(?:[);/ ]|$)',
        model: 'F1s',
      },
      {
        regex: '(?:OPPO[ _]?)?CPH1609(?:[);/ ]|$)',
        model: 'F3',
      },
      {
        regex: '(?:OPPO[ _]?)?CPH1613(?:[);/ ]|$)',
        model: 'F3 Plus',
      },
      {
        regex: '(?:OPPO[ _]?)?CPH172[37](?:[);/ ]|$)',
        model: 'F5',
      },
      {
        regex: '(?:OPPO[ _]?)?CPH1725(?:[);/ ]|$)',
        model: 'F5 Youth',
      },
      {
        regex: '(?:OPPO[ _]?)?CPH(1859|18(?:19|21))(?:[);/ ]|$)',
        model: 'F7',
      },
      {
        regex: '(?:OPPO[ _]?)?(?:CPH1825|CPH1881)(?:[);/ ]|$)',
        model: 'F9',
      },
      {
        regex: '(?:OPPO[ _]?)?CPH1823(?:[);/ ]|$)',
        model: 'F9 Pro',
      },
      {
        regex: '(?:OPPO[ _]?)?X909T?(?:[);/ ]|$)',
        model: 'Find 5',
      },
      {
        regex: '(?:OPPO[ _]?)?R827T?(?:[);/ ]|$)',
        model: 'Find 5 Mini',
      },
      {
        regex: '(?:OPPO[ _]?)?X907[067](?:[);/ ]|$)',
        model: 'Find 7',
      },
      {
        regex: '(?:OPPO[ _]?)?X900[067](?:[);/ ]|$)',
        model: 'Find 7a',
      },
      {
        regex: '(?:OPPO[ _]?)?R815[TW]?(?:[);/ ]|$)',
        model: 'Find Clover',
      },
      {
        regex: '(?:OPPO[ _]?)?R8015(?:[);/ ]|$)',
        model: 'Find Guitar',
      },
      {
        regex: '(?:OPPO[ _]?)?R8111(?:[);/ ]|$)',
        model: 'Find Melody',
      },
      {
        regex: '(?:OPPO[ _]?)?R821T?(?:[);/ ]|$)',
        model: 'Find Muse',
      },
      {
        regex: '(?:OPPO[ _]?)?U707T?(?:[);/ ]|$)',
        model: 'Find Way S',
      },
      {
        regex: '(?:OPPO[ _]?)?U705T(?:[);/ ]|$)',
        model: 'Ulike 2',
      },
      {
        regex: '(?:OPPO[ _]?)?(?:CPH187[15]|PAF[MT]00)(?:[);/ ]|$)',
        model: 'Find X',
      },
      {
        regex: '(?:OPPO[ _]?)?(?:PAHM00)(?:[);/ ]|$)',
        model: 'Find X Lamborghini',
      },
      {
        regex: '(?:OPPO[ _]?)?(?:PDEM10|CPH2023)(?:[);/ ]|$)',
        model: 'Find X2',
      },
      {
        regex: '(?:OPPO[ _]?)?CPH2005(?:[);/ ]|$)',
        model: 'Find X2 Lite',
      },
      {
        regex: '(?:OPPO[ _]?)?(?:PDEM30|OPG01|CPH2025)(?:[);/ ]|$)',
        model: 'Find X2 Pro',
      },
      {
        regex: '(?:OPPO[ _]?)?R1011 Build',
        model: 'Joy Plus',
      },
      {
        regex: '(?:OPPO[ _]?)?(PBC(?:M30|T10))(?:[);/ ]|$)',
        model: 'K1',
      },
      {
        regex: 'CPH1955(?:[);/ ]|$)',
        model: 'K3',
      },
      {
        regex: '(?:OPPO[ _]?)?(PCNM00)(?:[);/ ]|$)',
        model: 'K5',
      },
      {
        regex: '(?:OPPO[ _]?)?(PCLM50)(?:[);/ ]|$)',
        model: 'K7',
      },
      {
        regex: '(?:OPPO[ _]?)?N5117(?:[);/ ]|$)',
        model: 'N1 Mini',
      },
      {
        regex: '(?:OPPO[ _]?)?N520[79](?:[);/ ]|$)',
        model: 'N3',
      },
      {
        regex: '(?:OPPO[ _]?)?R831T?(?:[);/ ]|$)',
        model: 'Neo',
      },
      {
        regex: '(?:OPPO[ _]?)?R831K(?:[);/ ]|$)',
        model: 'Neo 3',
      },
      {
        regex: '(?:OPPO[ _]?)?R831[SL](?:[);/ ]|$)',
        model: 'Neo 5',
      },
      {
        regex: '(?:OPPO[ _]?)?A33f(?:[);/ ]|$)',
        model: 'Neo 7',
      },
      {
        regex: '(?:OPPO[ _]?)?A33fw(?:[);/ ]|$)',
        model: 'Neo 7s',
      },
      {
        regex: '(?:OPPO[ _]?)?R8113(?:[);/ ]|$)',
        model: 'Piano',
      },
      {
        regex: '(?:OPPO[ _]?)?CPH1707(?:[);/ ]|$)',
        model: 'R11',
      },
      {
        regex: 'R8001(?:[);/ ]|$)',
        model: 'R1K',
      },
      {
        regex: '(?:OPPO[ _]?)?CPH1719(?:[);/ ]|$)',
        model: 'R11s',
      },
      {
        regex: '(?:OPPO[ _]?)?CPH1721(?:[);/ ]|$)',
        model: 'R11s Plus',
      },
      {
        regex: '(?:OPPO[ _]?)?(?:CPH1835|PAC[TM]00|PAAM00)(?:[);/ ]|$)',
        model: 'R15',
      },
      {
        regex: '(?:OPPO[ _]?)?(?:CPH183[13]|PAAT00)(?:[);/ ]|$)',
        model: 'R15 Pro',
      },
      {
        regex: 'PBCM10(?:[);/ ]|$)',
        model: 'R15x',
      },
      {
        regex: '(?:OPPO[ _]?)?(?:CPH1879|PBE[MT]00)(?:[);/ ]|$)',
        model: 'R17',
      },
      {
        regex: '(?:OPPO[ _]?)?(?:CPH1893)(?:[);/ ]|$)',
        model: 'R17 Neo',
      },
      {
        regex: '(?:OPPO[ _]?)?(?:CPH1877|PBD[MT]00)(?:[);/ ]|$)',
        model: 'R17 Pro',
      },
      {
        regex: '(?:OPPO[ _]?)?R8006(?:[);/ ]|$)',
        model: 'R1L',
      },
      {
        regex: '(?:OPPO[ _]?)?R800[07](?:[);/ ]|$)',
        model: 'R1S',
      },
      {
        regex: '(?:OPPO[ _]?)?R810[679](?:[);/ ]|$)',
        model: 'R5',
      },
      {
        regex: '(?:OPPO[ _]?)?R7kf(?:[);/ ]|$)',
        model: 'R7 Lite',
      },
      {
        regex: '(?:OPPO[ _]?)?R7Plusm(?:[);/ ]|$)',
        model: 'R7 Plus',
      },
      {
        regex: '(?:OPPO[ _]?)?R7Plusf(?:[);/ ]|$)',
        model: 'R7 Plus F',
      },
      {
        regex: '(?:OPPO[ _]?)?X9079(?:[);/ ]|$)',
        model: 'R9 Plus',
      },
      {
        regex: '(?:OPPO[ _]?)?CPH1607(?:[);/ ]|$)',
        model: 'R9s',
      },
      {
        regex: '(?:OPPO[ _]?)?(?:CPH1611|R9s Plus)(?:[);/ ]|$)',
        model: 'R9s Plus',
      },
      {
        regex: '(?:CPH1917|PCA[MT]00)(?:[);/ ]|$)',
        model: 'Reno',
      },
      {
        regex: 'CPH1983(?:[);/ ]|$)',
        model: 'Reno A',
      },
      {
        regex: 'PCCM00(?:[);/ ]|$)',
        model: 'Reno 10X',
      },
      {
        regex: 'CPH1919(?:[);/ ]|$)',
        model: 'Reno 10X Zoom',
      },
      {
        regex: '(?:PCKM00|CPH1907)(?:[);/ ]|$)',
        model: 'Reno 2',
      },
      {
        regex: 'CPH1989(?:[);/ ]|$)',
        model: 'Reno 2F',
      },
      {
        regex: '(?:PCKM80|CPH1945|CPH1951)(?:[);/ ]|$)',
        model: 'Reno 2Z',
      },
      {
        regex: 'CPH2043(?:[);/ ]|$)',
        model: 'Reno 3',
      },
      {
        regex: '(?:CPH2013|A002OP)(?:[);/ ]|$)',
        model: 'Reno 3A',
      },
      {
        regex: '(?:PDCM00|A001OP)(?:[);/ ]|$)',
        model: 'Reno 3 5G',
      },
      {
        regex: '(?:PCRM00|CPH203[57]|CPH2009)',
        model: 'Reno 3 Pro',
      },
      {
        regex: 'CPH2113(?:[);/ ]|$)',
        model: 'Reno 4 4G',
      },
      {
        regex: 'CPH2125(?:[);/ ]|$)',
        model: 'Reno 4 Lite',
      },
      {
        regex: 'CPH2109(?:[);/ ]|$)',
        model: 'Reno 4 Pro 4G',
      },
      {
        regex: 'PDP[TM]00(?:[);/ ]|$)',
        model: 'Reno 4 5G',
      },
      {
        regex: 'PEA[TM]00(?:[);/ ]|$)',
        model: 'Reno 4 SE 5G ',
      },
      {
        regex: 'PDN[TM]00(?:[);/ ]|$)',
        model: 'Reno 4 Pro 5G',
      },
      {
        regex: 'PDSM00(?:[);/ ]|$)',
        model: 'Reno 5 Pro 5G',
      },
      {
        regex: 'CPH192[15]',
        model: 'Reno 5G',
      },
      {
        regex: 'PCLM10(?:[);/ ]|$)',
        model: 'Reno Ace',
      },
      {
        regex: 'PDHM00(?:[);/ ]|$)',
        model: 'Reno Ace 2',
      },
      {
        regex: 'PCGM00(?:[);/ ]|$)',
        model: 'Reno K3',
      },
      {
        regex: '(?:OPPO[ _]?)?(?:CPH1979|PCD[TM]10)(?:[);/ ]|$)',
        model: 'Reno Z',
      },
      {
        regex: 'N1T?(?:[);/ ]|$)',
        model: 'N1T',
        device: 'phablet',
      },
      {
        regex: 'R([0-9]{3,4}[KSTW]?)(?:[);/ ]|$)',
        model: 'R$1',
      },
      {
        regex: '(CPH[0-9]{4})',
        model: '$1',
      },
      {
        regex: '(?:OB-)?OPPO[ _]?((?!Browser)[a-z0-9]+)',
        model: '$1',
      },
    ],
  },
  Samsung: {
    regex:
      'SAMSUNG(?! ?Browser)|Maple (?!III)|SC-(?:01[FGHKLM]|02[CGHJKLM]|03[JKL]|04[EJL]|05[GL]|(?:4[12]|5[1234])A)|N[57]100|N5110|N9100|S(?:CH|GH|PH|EC|AM|HV|HW|M)-|SMART-TV|GT-|(?<!GOG|GOG )Galaxy|(?:portalmmm|o2imode)/2\\.0 [SZ]|sam[rua]|vollo Vi86(?:[);/ ]|$)|(?:OTV-)?SMT-E5015|ISW11SC|SCV4[0-9]|SCV3[1-9]|40[34]SC|SCL2[234]|SCG0[1-7]|SCT21',
    device: 'smartphone',
    models: [
      {
        regex: 'GT-B9150',
        device: 'tv',
        model: 'Home Sync',
      },
      {
        regex: '(?:OTV-)?SMT-E5015',
        device: 'tv',
        model: 'SMT-E5015',
      },
      {
        regex: 'Maple ',
        device: 'tv',
        model: '',
      },
      {
        regex: '(?:SAMSUNG-)?(?:GT-)?N5100',
        device: 'tablet',
        model: 'Galaxy Note 8.0"',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T677(?:[ATV]|N[KL])?(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy View 18.4" LTE',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T670(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy View 18.4" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?(?:GT-)?N5110',
        device: 'tablet',
        model: 'Galaxy Note 8.0" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?GT-N5120',
        device: 'tablet',
        model: 'Galaxy Note 8.0" LTE',
      },
      {
        regex: '(?:SAMSUNG-)?(?:GT|SM)-N8000',
        device: 'tablet',
        model: 'Galaxy Note 10.1"',
      },
      {
        regex: '(?:SAMSUNG-)?GT-N8010',
        device: 'tablet',
        model: 'Galaxy Note 10.1" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?GT-N8020',
        device: 'tablet',
        model: 'Galaxy Note 10.1" LTE',
      },
      {
        regex: '(?:SAMSUNG-)?GT-P1000M?|SCH-I800',
        device: 'tablet',
        model: 'Galaxy Tab',
      },
      {
        regex: '(?:SAMSUNG-)?GT-P3100B?',
        device: 'tablet',
        model: 'Galaxy Tab 2 7"',
      },
      {
        regex: '(?:SAMSUNG-)?GT-P311[03]',
        device: 'tablet',
        model: 'Galaxy Tab 2 7" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?GT-P5100|SCH-I915',
        device: 'tablet',
        model: 'Galaxy Tab 2 10.1"',
      },
      {
        regex: '(?:SAMSUNG-)?GT-P511[03]',
        device: 'tablet',
        model: 'Galaxy Tab 2 10.1" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T217T',
        device: 'tablet',
        model: 'Galaxy Tab 3 7.0" 4G',
      },
      {
        regex: '(?:SAMSUNG-)?GT-P5200',
        device: 'tablet',
        model: 'Galaxy Tab 3 10.1"',
      },
      {
        regex: '(?:SAMSUNG-)?GT-P5210',
        device: 'tablet',
        model: 'Galaxy Tab 3 10.1" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?GT-P5220',
        device: 'tablet',
        model: 'Galaxy Tab 3 10.1" LTE',
      },
      {
        regex: '(?:SAMSUNG-)?GT-P6200',
        device: 'tablet',
        model: 'Galaxy Tab 7" Plus',
      },
      {
        regex: '(?:SAMSUNG-)?GT-P6201',
        device: 'tablet',
        model: 'Galaxy Tab 7" Plus N',
      },
      {
        regex: '(?:SAMSUNG-)?GT-P6810',
        device: 'tablet',
        model: 'Galaxy Tab 7.7"',
      },
      {
        regex: '(?:SAMSUNG-)?GT-P7100',
        device: 'tablet',
        model: 'Galaxy Tab 10.1v',
      },
      {
        regex: '(?:SAMSUNG-)?GT-P75[01]0',
        device: 'tablet',
        model: 'Galaxy Tab 10.1"',
      },
      {
        regex: '(?:SAMSUNG-)?SM-P600',
        device: 'tablet',
        model: 'Galaxy Note 10.1" 2014 Edition WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-P60[12]',
        device: 'tablet',
        model: 'Galaxy Note 10.1" 2014 Edition',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:P605|P607T)',
        device: 'tablet',
        model: 'Galaxy Note 10.1" 2014 Edition LTE',
      },
      {
        regex: '(?:SAMSUNG-)?SM-P900',
        device: 'tablet',
        model: 'Galaxy NotePRO 12.2" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-P901',
        device: 'tablet',
        model: 'Galaxy NotePRO 12.2"',
      },
      {
        regex: '(?:SAMSUNG-)?SM-P905',
        device: 'tablet',
        model: 'Galaxy NotePRO 12.2" LTE',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:P587|P588C)(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab A 10.1" with S Pen (2016) LTE',
      },
      {
        regex: '(?:SAMSUNG-)?SM-P583(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab A 10.1" with S Pen (2016) WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-P205(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab A 8.0" with S Pen (2019) LTE',
      },
      {
        regex: '(?:SAMSUNG-)?SM-P200(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab A 8.0" with S Pen (2019) WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T307U(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab A 8.4" (2020) LTE',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:T505[CN]?|T507)(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab A7 10.4" (2020) LTE',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T500(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab A7 10.4" (2020) WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T11[03]',
        device: 'tablet',
        model: 'Galaxy Tab 3 Lite 7.0" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:T830[X]?|T837R4)(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab S4 10.5" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T837P(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab S4 10.5" with S Pen',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:T835[CN]?|T837[VTA]?)(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab S4 10.5"',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:T725[CN]?|T720X|T727(?:R4|[AUV])?)(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab S5e 10.5"',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T720(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab S5e 10.5" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T865N?(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab S6 10.5"',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T867(?:R4|[VU])?(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab S6 10.5" LTE',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:P615[CN]?|P617)(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab S6 Lite 10.4"',
      },
      {
        regex: '(?:SAMSUNG-)?SM-P610X?(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab S6 Lite 10.4" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T860(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab S6 10.5" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T866N(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab S6 10.5" 5G',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T111[M]?(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab 3 Lite 7.0"',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T116(?:BU|NU|NY)?',
        device: 'tablet',
        model: 'Galaxy Tab 3 V',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:T2105|T212)',
        device: 'tablet',
        model: 'Galaxy Tab 3 7.0" Kids',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T210R?',
        device: 'tablet',
        model: 'Galaxy Tab 3 7.0" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T21(?:[15]|7[AS])',
        device: 'tablet',
        model: 'Galaxy Tab 3 7.0"',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T230(?:NU)?',
        device: 'tablet',
        model: 'Galaxy Tab 4 7.0" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T23[15]|403SC',
        device: 'tablet',
        model: 'Galaxy Tab 4 7.0" 3G',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:T239|T237[PV])',
        device: 'tablet',
        model: 'Galaxy Tab 4 7.0" LTE',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T232(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab 4 7.0" WiFi + 3G',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T310',
        device: 'tablet',
        model: 'Galaxy Tab 3 8.0" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T311',
        device: 'tablet',
        model: 'Galaxy Tab 3 8.0"',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T315',
        device: 'tablet',
        model: 'Galaxy Tab 3 8.0" LTE',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T330',
        device: 'tablet',
        model: 'Galaxy Tab 4 8.0" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:T33[215]|T337[AVT])',
        device: 'tablet',
        model: 'Galaxy Tab 4 8.0" LTE',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T520',
        device: 'tablet',
        model: 'Galaxy TabPRO 10.1" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:T53[15]|T537[AV])',
        device: 'tablet',
        model: 'Galaxy Tab 4 10.1" LTE',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T536(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab 4 10.1" Advanced',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T532(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab 4 10.1"',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T320',
        device: 'tablet',
        model: 'Galaxy TabPRO 8.4" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T325',
        device: 'tablet',
        model: 'Galaxy TabPRO 8.4" LTE',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T525',
        device: 'tablet',
        model: 'Galaxy TabPRO 10.1" LTE',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:T530(?:NU)?|T533)',
        device: 'tablet',
        model: 'Galaxy Tab 4 10.1" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T700',
        device: 'tablet',
        model: 'Galaxy Tab S 8.4" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:T705|T707[AV])',
        device: 'tablet',
        model: 'Galaxy Tab S 8.4" LTE',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T800',
        device: 'tablet',
        model: 'Galaxy Tab S 10.5" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?(?:SM-(?:T805|T807[PV]?)|SCT21)',
        device: 'tablet',
        model: 'Galaxy Tab S 10.5" LTE',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:T813|T810)',
        device: 'tablet',
        model: 'Galaxy Tab S2 9.7" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:T719[CY]?|T715(?:N0|[CY])?)(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab S2 8.0" LTE',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:T71[03]|T710X)(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab S2 8.0" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:T815|T817[ATW]?|T818[ATVW]?|T819[Y]?)',
        device: 'tablet',
        model: 'Galaxy Tab S2 9.7" LTE',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T820',
        device: 'tablet',
        model: 'Galaxy Tab S3 9.7" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T82[57]',
        device: 'tablet',
        model: 'Galaxy Tab S3 9.7" LTE',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T975N?(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab S7+ 12.4" LTE',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T970(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab S7+ 12.4" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:T976[BN]|T978U)(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab S7+ 12.4" 5G',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T870(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab S7 11.0" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T875N?(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab S7 11.0" LTE',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T878U(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab S7 11.0" 5G',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T900',
        device: 'tablet',
        model: 'Galaxy TabPRO 12.2" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T280',
        device: 'tablet',
        model: 'Galaxy Tab A 7.0" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T285',
        device: 'tablet',
        model: 'Galaxy Tab A 7.0" LTE',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T3[58]0',
        device: 'tablet',
        model: 'Galaxy Tab A 8.0" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:P350|T3[58]5|T357[TW])',
        device: 'tablet',
        model: 'Galaxy Tab A 8.0" LTE',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T387(?:AA|R4|VK|[TVW])',
        device: 'tablet',
        model: 'Galaxy Tab A 8.0" LTE (2018)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T295',
        device: 'tablet',
        model: 'Galaxy Tab A 8.0" LTE (2019)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T290',
        device: 'tablet',
        model: 'Galaxy Tab A 8.0" WiFi (2019)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:P355([MY])?|T550)',
        device: 'tablet',
        model: 'Galaxy Tab A 9.7" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:P550|P555(M)?|T555)',
        device: 'tablet',
        model: 'Galaxy Tab A 9.7" LTE',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:T58[05]|P58[05])',
        device: 'tablet',
        model: 'Galaxy Tab A 10.1" WiFi (2016)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T587[P]?',
        device: 'tablet',
        model: 'Galaxy Tab A 10.1" LTE (2016)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T59[057]',
        device: 'tablet',
        model: 'Galaxy Tab A 10.5" LTE (2018)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T51(?:7P|[057])',
        device: 'tablet',
        model: 'Galaxy Tab A 10.1" (2019)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:T37[57]|T378[KLSV])',
        device: 'tablet',
        model: 'Galaxy Tab E 8.0"',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T56[02]',
        device: 'tablet',
        model: 'Galaxy Tab E 9.6" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T561',
        device: 'tablet',
        model: 'Galaxy Tab E 9.6" 3G',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T567V',
        device: 'tablet',
        model: 'Galaxy Tab E 9.6" 4G',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T365(?:F0|[MY])?(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab Active 8.0"',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T360(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab Active 8.0" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:T395[CN]?|T397U)(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab Active 2 8.0"',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T390(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab Active 2 8.0" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:T575N?|T577U?)(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab Active 3 8.0"',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T570(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab Active 3 8.0" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:T545|T547U?)(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab Active Pro 10.1"',
      },
      {
        regex: '(?:SAMSUNG-)?SM-T540(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Tab Active Pro 10.1" WiFi',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:P902|P907A)(?:[);/ ]|$)',
        device: 'tablet',
        model: 'Galaxy Note Pro 12.2"',
      },
      {
        regex: '(?:SAMSUNG[- ])?SM-T2519',
        model: 'Galaxy Tab Q',
        device: 'tablet',
      },
      {
        regex: '(?:SAMSUNG )?SM-R820',
        device: 'wearable',
        model: 'Galaxy Watch Active 2',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G850(?:8S|[AFKLMSWXY])',
        model: 'Galaxy Alpha',
      },
      {
        regex: '(?:SAMSUNG-)?GT-B5330',
        model: 'Galaxy Chat',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A605K',
        model: 'Galaxy Jean',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A202K',
        model: 'Galaxy Jean 2',
      },
      {
        regex: '(?:SAMSUNG-)?GT-B5510',
        model: 'Galaxy Y Pro',
      },
      {
        regex: '(?:SAMSUNG-)?GT-B5512',
        model: 'Galaxy Y Pro Duos',
      },
      {
        regex: '(?:SAMSUNG-)?GT-B7510',
        model: 'Galaxy Pro',
      },
      {
        regex: '(?:SAMSUNG-)?GT-I5700',
        model: 'Galaxy Spica',
      },
      {
        regex: '(?:SAMSUNG-)?GT-I5801',
        model: 'Galaxy Apollo',
      },
      {
        regex: '(?:SAMSUNG-)?GT-I5800',
        model: 'Galaxy 3',
      },
      {
        regex: '(?:SAMSUNG-)?GT-I8000',
        model: 'Omnia II',
      },
      {
        regex: '(?:SAMSUNG-)?(?:GT-I8150|SM-T255S)',
        model: 'Galaxy W',
      },
      {
        regex: 'SC-01H(?:[);/ ]|$)',
        model: 'Galaxy Active Neo',
      },
      {
        regex: '(?:SAMSUNG-)?GT-S5830',
        model: 'Galaxy Ace',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:G357(?:FZ|M)|G310HN)',
        model: 'Galaxy Ace Style',
      },
      {
        regex: '(?:SAMSUNG-)?GT-I8160',
        model: 'Galaxy Ace 2',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G313(?:HY|M[LUY]|[FM])',
        model: 'Galaxy Ace 4',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G316M',
        model: 'Galaxy Ace 4 Duos',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G313[HU]',
        model: 'Galaxy Ace 4 Lite',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:G316U|G318(?:H|ML))(?:[);/ ]|$)',
        model: 'Galaxy Ace 4 Neo',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G9100(?:[);/ ]|$)',
        model: 'Galaxy S II',
      },
      {
        regex: '(?:SAMSUNG-)?SHV-E120S(?:[);/ ]|$)',
        model: 'Galaxy S II HD LTE',
      },
      {
        regex: '(?:SAMSUNG-)?GT-I8190',
        model: 'Galaxy S III mini',
      },
      {
        regex: '(?:SAMSUNG-)?GT-I8200',
        model: 'Galaxy S III mini Value Edition',
      },
      {
        regex: '(?:SAMSUNG-)?GT-I826[02]',
        model: 'Galaxy Core',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G386W',
        model: 'Galaxy Core LTE',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G3589W',
        model: 'Galaxy Core Lite LTE',
      },
      {
        regex: '(?:SAMSUNG-)?GT-I8320',
        model: 'H1',
      },
      {
        regex: '(?:SAMSUNG-)?GT-I85[23]0',
        model: 'Galaxy Beam',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G3858',
        model: 'Galaxy Beam 2',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G600S',
        model: 'Galaxy Wide',
      },
      {
        regex: '(?:SAMSUNG-)?GT-I855[028]',
        model: 'Galaxy Win',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G381[28]',
        model: 'Galaxy Win Pro',
      },
      {
        regex: '(?:SAMSUNG-)?GT-I8580',
        model: 'Galaxy Core Advance',
      },
      {
        regex: '(?:SAMSUNG-)?GT-I8730',
        model: 'Galaxy Express',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:E500(?:HQ|YZ|[0FHM])|S978L)',
        model: 'Galaxy E5',
      },
      {
        regex: '(?:SAMSUNG-)?SM-E700[09FHM]',
        model: 'Galaxy E7',
      },
      {
        regex: '(?:SAMSUNG-)?GT-I90(?:00|08|18|88)',
        model: 'Galaxy S',
      },
      {
        regex: '(?:SAMSUNG-)?GT-I9001',
        model: 'Galaxy S Plus',
      },
      {
        regex: '(?:SAMSUNG-)?GT-I9003',
        model: 'Galaxy SL',
      },
      {
        regex: '(?:SAMSUNG-)?GT-I9010',
        model: 'Galaxy S Giorgio Armani',
      },
      {
        regex: '(?:SAMSUNG-)?GT-I9070',
        model: 'Galaxy S Advance',
      },
      {
        regex: '(?:SAMSUNG-)?GT-I910[08]',
        model: 'Galaxy S II',
      },
      {
        regex: '(?:SAMSUNG-)?ISW11SC',
        model: 'Galaxy S II WiMAX',
      },
      {
        regex: '(?:SAMSUNG-)?GT-I9103',
        model: 'Galaxy R',
      },
      {
        regex: '(?:SAMSUNG-)?GT-I9105',
        model: 'Galaxy S II Plus',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G730(?:W8|[AV])',
        model: 'Galaxy S3 mini',
      },
      {
        regex: '(?:SAMSUNG-)?(?:GT-I919[025]|SCH-I435)',
        model: 'Galaxy S4 mini',
      },
      {
        regex: '(?:SAMSUNG-)?GT-I9515',
        model: 'Galaxy S4 Value Edition',
      },
      {
        regex: '(?:SAMSUNG-)?GT-I9295',
        model: 'Galaxy S4 ACTIVE',
      },
      {
        regex: '(?:SAMSUNG-)?(?:GT-I9300|SCH-(?:I535|I939|L710))',
        model: 'Galaxy S III',
      },
      {
        regex: '(?:SAMSUNG-)?(?:GT-I9305|SCH-R530)',
        model: 'Galaxy S III LTE',
      },
      {
        regex: '(?:SAMSUNG-)?(?:SM-S975L|GT-I950[025]|SC-04E|SCH-(?:I545|I959|R970)|SGH-M919N?|Galaxy-S4)',
        model: 'Galaxy S4',
      },
      {
        regex: '(?:SAMSUNG-)?GT-I9506',
        model: 'Galaxy S4 with LTE+',
      },
      {
        regex: '(?:SAMSUNG-)?GT-S5280',
        model: 'Galaxy STAR',
      },
      {
        regex: '(?:SAMSUNG-)?GT-S5301',
        model: 'Galaxy POCKET Plus',
      },
      {
        regex: '(?:SAMSUNG-)?GT-S5310',
        model: 'Galaxy POCKET Neo',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G110[BHM]',
        model: 'Galaxy POCKET 2',
      },
      {
        regex: '(?:SAMSUNG-)?GT-S5360',
        model: 'Galaxy Y Hello Kitty',
      },
      {
        regex: '(?:SAMSUNG-)?GT-S6310',
        model: 'Galaxy Young',
      },
      {
        regex: '(?:SAMSUNG-)?GT-S6312',
        model: 'Galaxy Young DUOS',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G130(?:BT|HN|[EHMU])',
        model: 'Galaxy Young 2',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G130BU',
        model: 'Galaxy Young 2 Pro',
      },
      {
        regex: '(?:SAMSUNG-)?GT-S6790',
        model: 'Galaxy FAME Lite with NFC',
      },
      {
        regex: '(?:SAMSUNG-)?GT-S6810',
        model: 'Galaxy FAME',
      },
      {
        regex: '(?:SAMSUNG-)?GT-S6812',
        model: 'Galaxy FAME Duos',
      },
      {
        regex: 'SC-04J(?:[);/ ]|$)',
        model: 'Galaxy Feel',
      },
      {
        regex: 'SC-02L(?:[);/ ]|$)',
        model: 'Galaxy Feel 2',
      },
      {
        regex: '(?:SAMSUNG-)?GT-S7275',
        model: 'Galaxy ACE 3',
      },
      {
        regex: '(?:SAMSUNG-)?GT-S7500',
        model: 'Galaxy ACE Plus',
      },
      {
        regex: '(?:SAMSUNG-)?(?:GT-S7560|SCH-I699)',
        model: 'Galaxy Trend',
      },
      {
        regex: '(?:SAMSUNG-)?GT-S7390',
        model: 'Galaxy Trend Lite',
      },
      {
        regex: '(?:SAMSUNG-)?GT-S7580',
        model: 'Galaxy Trend Plus',
      },
      {
        regex: '(?:SAMSUNG-)?SCH-I739',
        model: 'Galaxy Trend 2',
      },
      {
        regex: '(?:SAMSUNG-)?(?:GT-S7562|SCH-I919)',
        model: 'Galaxy S DUOS',
      },
      {
        regex: '(?:SAMSUNG-)?GT-S7582',
        model: 'Galaxy S DUOS 2',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:G31[36]HU|G313HZ)',
        model: 'Galaxy S DUOS 3',
      },
      {
        regex: '(?:SAMSUNG-)?GT-S7710',
        model: 'Galaxy Xcover 2',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G388F',
        model: 'Galaxy Xcover 3',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G389F',
        model: 'Galaxy Xcover 3 VE',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G390[FWY]',
        model: 'Galaxy Xcover 4',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G398FN',
        model: 'Galaxy Xcover 4s',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G715(?:FN|U1|[AUW])',
        model: 'Galaxy Xcover Pro',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G889(?:YB|[AFG])',
        model: 'Galaxy Xcover FieldPro',
      },
      {
        regex: '(?:SAMSUNG-)?GT-S8500',
        model: 'Wave',
      },
      {
        regex: '(?:SAMSUNG-)?GT-S8530',
        model: 'Wave II',
      },
      {
        regex: '(?:SAMSUNG-)?GT-S8600',
        model: 'Wave 3',
      },
      {
        regex: '(?:SAMSUNG-)?GT-S5380',
        model: 'Wave Y',
      },
      {
        regex: '(?:SAMSUNG-)?GT-S7250',
        model: 'Wave M',
      },
      {
        regex: '(?:SAMSUNG-)?GT-S5250',
        model: 'Wave 525',
      },
      {
        regex: '(?:SAMSUNG-)?GT-S5330',
        model: 'Wave 533',
      },
      {
        regex: '(?:SAMSUNG-)?GT-S5780',
        model: 'Wave 578',
      },
      {
        regex: '(?:SAMSUNG-)?GT-S7230',
        model: 'Wave 723',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:C101|C105([AL])?)',
        model: 'Galaxy S4 zoom',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:C111(M)?|C115)',
        model: 'Galaxy K zoom',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G318[HM]Z',
        model: 'Galaxy V Plus',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G355(?:6D|[89HM])',
        model: 'Galaxy Core 2',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G350',
        model: 'Galaxy Core Plus',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:G360[FH]?|S820L)',
        model: 'Galaxy Core Prime',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G361[FH]?',
        model: 'Galaxy Core Prime Value Edition',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:G386F|G3518(?:_TD)?|G3586V)',
        model: 'Galaxy Core LTE',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G3568V',
        model: 'Galaxy Core Mini 4G',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G5108Q?',
        model: 'Galaxy Core Max',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G3815',
        model: 'Galaxy EXPRESS II',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G800',
        model: 'Galaxy S5 mini',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G9009D',
        model: 'Galaxy S5 Dual-SIM',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:G900|G906[KLS]|S902L|S903VL)|Galaxy-S5|SCL23',
        model: 'Galaxy S5',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G901F',
        model: 'Galaxy S5 LTE+',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G870[AFW]|SC-02G',
        model: 'Galaxy S5 Active',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G903[FMW]',
        model: 'Galaxy S5 Neo',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G860P',
        model: 'Galaxy S5 K Sport',
      },
      {
        regex: '(?:SAMSUNG-)?(?:SM-G920(?:F[DQ]|W8|[089AFIKLPRSTVX])?|SM-S906L|SM-S907VL)|SC-05G',
        model: 'Galaxy S6',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G890A',
        model: 'Galaxy S5 Active',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G925[0ADFIKLPRSTVWX]|SCV31|404SC',
        model: 'Galaxy S6 Edge',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G928(?:7C|N0|R4|W8|[07ACFGIKLPSTVX])',
        model: 'Galaxy S6 Edge+',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G930(?:AZ|FD|R[467]|T1|V[CL]|W8|[0AFKLPRSTUVX8])?(?:[);/ ]|$)',
        model: 'Galaxy S7',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G935(?:R4|W8|[0AFKLPSTUVX])|SC-02H|SCV33',
        model: 'Galaxy S7 Edge',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G891A',
        model: 'Galaxy S7 Active',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G950[08FNUW]?|SCV36|SC-02J',
        model: 'Galaxy S8',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G8750',
        model: 'Galaxy S8 Lite',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G892[AU]',
        model: 'Galaxy S8 Active',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G955[0AFKLNPRTUVWX]?|SCV35|SC-03J',
        model: 'Galaxy S8+',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G960[0FNUWX]?|SCV38|SC-02K',
        model: 'Galaxy S9',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G965[0FNUWX]|SCV39|SC-03K',
        model: 'Galaxy S9+',
      },
      {
        regex: '(?:SAMSUNG-)?(?:SM-(?:G973|G977[BNPTU])|SCV41|SC-03L)',
        model: 'Galaxy S10',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:S10 Lite|G770(?:U1|F))',
        model: 'Galaxy S10 Lite',
      },
      {
        regex: '(?:SAMSUNG-)?(?:SM-G975[08FUNWX]|SCV42|SC-04L)',
        model: 'Galaxy S10+',
      },
      {
        regex: 'SC-05L',
        model: 'Galaxy S10+ Olympic Games Edition',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G970(?:U1|[08FUNWX])(?:[);/ ]|$)',
        model: 'Galaxy S10e',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G980F',
        model: 'Galaxy S20',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G981(?:U1|[0BNUVW])|SCG01|SC-51A',
        model: 'Galaxy S20 5G',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G780F',
        model: 'Galaxy S20 FE',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G781(?:U1|[0BNUVW])',
        model: 'Galaxy S20 FE 5G',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G988(?:U1|[0BNQUW])|SCG03',
        model: 'Galaxy S20 Ultra 5G',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G985F|SCG02',
        model: 'Galaxy S20+',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G986(?:U1|[0BNUW])|SC-52A',
        model: 'Galaxy S20+ 5G',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G991(?:U1|[0BNW])',
        model: 'Galaxy S21 5G',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G998(?:U1|[0BNUW])',
        model: 'Galaxy S21 Ultra 5G',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G996(?:U1|[0BNWU])',
        model: 'Galaxy S21+ 5G',
      },
      {
        regex: '(?:SAMSUNG-)?SM-F700(?:U1|[0FNUW])|SCV47',
        model: 'Galaxy Z Flip',
      },
      {
        regex: '(?:SAMSUNG-)?SM-F707(?:U1|[0BNUW])|SCG04',
        model: 'Galaxy Z Flip 5G',
      },
      {
        regex: '(?:SAMSUNG-)?SCH-I200',
        model: 'Galaxy Stellar',
      },
      {
        regex: '(?:SAMSUNG-)?SCH-I829',
        model: 'Galaxy Style Duos',
      },
      {
        regex: '(?:SAMSUNG-)?(?:SCH-R740|SGH-S730)',
        model: 'Galaxy Discover',
      },
      {
        regex: '(?:SAMSUNG-)?SCH-S738',
        model: 'Galaxy Centura',
      },
      {
        regex: 'vollo Vi86(?:[);/ ]|$)',
        model: 'Vollo Vi86',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G386(?:T1|T)',
        model: 'Galaxy Avant',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A716S',
        model: 'Galaxy A Quantum',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:A015(?:DL|[TU]1|[AFGMUV])|S111DL)',
        model: 'Galaxy A01',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A013[FGM]',
        model: 'Galaxy A01 Core',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A025[FGM]',
        model: 'Galaxy A02s',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A022G',
        model: 'Galaxy A02',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A260[FG]',
        model: 'Galaxy A2 Core',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A300(?:FU|YZ|XU|XZ|[09FGHMXY])',
        model: 'Galaxy A3 (2015)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A310(?:N0|[FMXY])',
        model: 'Galaxy A3 (2016)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A320(?:FL|[FXY])',
        model: 'Galaxy A3 (2017)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A430F',
        model: 'Galaxy A4',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A500(?:YZ|[9LSWY])?(?:[);/ ]|$)',
        model: 'Galaxy A5',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A500[0FGHKM]',
        model: 'Galaxy A5 Duos',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A500(?:FU|X)',
        model: 'Galaxy A5 (2015)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A510[08FKLMSXY]',
        model: 'Galaxy A5 (2016)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A520[FKLSWX]',
        model: 'Galaxy A5 (2017)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A525F',
        model: 'Galaxy A52',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A600(?:AZ|FN|GN|T1|[AFGNPTUX])',
        model: 'Galaxy A6',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A605(?:[FG]N|[08FGX])',
        model: 'Galaxy A6+',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G6200',
        model: 'Galaxy A6s (2018)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A606[0Y]',
        model: 'Galaxy A60',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A700(?:YD|[09FHKLSX])',
        model: 'Galaxy A7',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A710[08FKLMSXY]',
        model: 'Galaxy A7 (2016)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A720[FMSX]',
        model: 'Galaxy A7 (2017)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A750(?:GN|[CFGNX])',
        model: 'Galaxy A7 (2018)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A71(?:5[FW])?(?:[);/ ]|$)',
        model: 'Galaxy A71',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A725F(?:[);/ ]|$)',
        model: 'Galaxy A72',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A716(?:U1|[0BUV])(?:[);/ ]|$)',
        model: 'Galaxy A71 5G',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A(?:530F|800[0FISXY])|SCV32',
        model: 'Galaxy A8',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G885[FSY]',
        model: 'Galaxy A8 Star',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A810(?:YZ|[FS])',
        model: 'Galaxy A8 (2016)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:A8s|G887[0F])',
        model: 'Galaxy A8s',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A530[MNWX]',
        model: 'Galaxy A8 (2018)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A730[FX]',
        model: 'Galaxy A8+ (2018)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A900[0F]',
        model: 'Galaxy A9',
      },
      {
        regex: 'SM-A9\\[7\\]',
        model: 'Galaxy A9 7',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A920[0FXN]',
        model: 'Galaxy A9 (2018)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G885[08]',
        model: 'Galaxy A9 Star',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:A9 Pro|A910[0F]|G887N)',
        model: 'Galaxy A9 Pro',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A105[FGMN]',
        model: 'Galaxy A10',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A107[FM]',
        model: 'Galaxy A10s',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:S102DL|A102[NUW])',
        model: 'Galaxy A10e',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A115(?:A[PZ]|U1|[AFMUW])',
        model: 'Galaxy A11',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A125[FM]',
        model: 'Galaxy A12',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:A205(?:U1|YN|[FGSWU])|S205DL)|SC-02M|SCV46',
        model: 'Galaxy A20',
      },
      {
        regex: '(?:SAMSUNG-)?(?:SM-A215(?:DL|U1|[UW])|SC-42A|SCV49)(?:[);/ ]|$)',
        model: 'Galaxy A21',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A217[FMN](?:[);/ ]|$)',
        model: 'Galaxy A21s',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A202[FG]',
        model: 'Galaxy A20e',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A207[0FM]',
        model: 'Galaxy A20s',
      },
      {
        regex: '(?:SAMSUNG-)?(?:SM-A305(?:[FGY]N|GT|[FGN])|SCV43)',
        model: 'Galaxy A30',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A307(?:FN|GN|GT|[FG])',
        model: 'Galaxy A30s',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A315[FGN](?:[);/ ]|$)',
        model: 'Galaxy A31',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A325F(?:[);/ ]|$)',
        model: 'Galaxy A32',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A326(?:BR|B)',
        model: 'Galaxy A32 5G',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A405(?:F[NM]|S)',
        model: 'Galaxy A40',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A305[018](?:[);/ ]|$)',
        model: 'Galaxy A40s',
      },
      {
        regex: '(?:SAMSUNG-)?(?:SM-A415F|SC-41A|SCV48)(?:[);/ ]|$)',
        model: 'Galaxy A41',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A426[0BN](?:[);/ ]|$)',
        model: 'Galaxy A42 5G',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:A505(?:F[GN]|U1|YN|[FGNUWX])|S506DL|505FN)',
        model: 'Galaxy A50',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A5070(?:[);/ ]|$)',
        model: 'Galaxy A50s',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A507FN',
        model: 'Galaxy A50s',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:A515[FUW]|S515DL)',
        model: 'Galaxy A51',
      },
      {
        regex: '(?:SAMSUNG-)?(?:SM-A516(?:U1|[0BNUV])|SC-54A|SCG07)',
        model: 'Galaxy A51 5G',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A705(?:GM|[MYF]N|[0FUWX])',
        model: 'Galaxy A70',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A707[0F]',
        model: 'Galaxy A70s',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A805[0FNX]',
        model: 'Galaxy A80',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A908[BN]',
        model: 'Galaxy A90',
      },
      {
        regex: '(?:SAMSUNG-)?SM-A9080',
        model: 'Galaxy A90 5G',
      },
      {
        regex: '(?:SAMSUNG-)?SM-F127G(?:[);/ ]|$)',
        model: 'Galaxy F12',
      },
      {
        regex: '(?:SAMSUNG-)?SM-F415F(?:[);/ ]|$)',
        model: 'Galaxy F41',
      },
      {
        regex: '(?:SAMSUNG-)?GT-I9301I',
        model: 'Galaxy S III Neo',
      },
      {
        regex: '(?:SAMSUNG-)?SM-S120VL(?:[);/ ]|$)',
        model: 'Galaxy Luna',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:J100(?:FN|VPP|MU|[FGHMY])|S777C)',
        model: 'Galaxy J1',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J105[BFHYM]',
        model: 'Galaxy J1 Mini',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J106[BFHM]',
        model: 'Galaxy J1 mini Prime',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:J120(?:ZN|[AFGHMPTW])|J05H)',
        model: 'Galaxy J1 (2016)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:J110[FGHLM]|J111[FM])',
        model: 'Galaxy J1 Ace',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J200[FGHMY]',
        model: 'Galaxy J2',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J200BT',
        model: 'Galaxy J2 Duos',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J260AZ',
        model: 'Galaxy J2 Pure',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:J260([AFGMY]|T1)|S260DL)',
        model: 'Galaxy J2 Core',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J(?:210F|250[FGMNY])',
        model: 'Galaxy J2 Pro',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:S367VL|S357BL)',
        model: 'Galaxy J3 Orbit',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J311(?:[09]|9S)',
        model: 'Galaxy J3 Pro',
      },
      {
        regex: '(?:SAMSUNG-)?SM-S320VL(?:[);/ ]|$)',
        model: 'Galaxy J3 Sky',
      },
      {
        regex: '(?:SAMSUNG-)?SM-S327VL(?:[);/ ]|$)',
        model: 'Galaxy J3 Luna Pro',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J327(?:T1|[ATW])(?:[);/ ]|$)',
        model: 'Galaxy J3 Prime',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J327(?:[FP]|R4)',
        model: 'Galaxy J3 Emerge',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J337R4(?:[);/ ]|$)',
        model: 'Galaxy J3 Aura',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J337T(?:[);/ ]|$)',
        model: 'Galaxy J3 Star',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J327V',
        model: 'Galaxy J3 Eclipse',
      },
      {
        regex: '(?:SAMSUNG-)?SM-S337TL',
        model: 'Galaxy J3 Luna Pro',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J3109',
        model: 'Galaxy J3 (2015)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:J300H|J320(?:[ZF]N|R4|W8|YZ|[AFGHMNPVY]))',
        model: 'Galaxy J3 (2016)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:J330(?:FN|[08FGLN])|J327(?:R7|U))(?:[);/ ]|$)',
        model: 'Galaxy J3 (2017)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J337(?:VPP|[AWPUV])(?:[);/ ]|$)',
        model: 'Galaxy J3 (2018)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:G400[FG]|J400[FGM])',
        model: 'Galaxy J4',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J500(?:FN|N0|[78FGHMY])(?:[);/ ]|$)',
        model: 'Galaxy J5 (2015)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:J510(?:[FGMU]N|FQ|[8FGHKLSY])|5108|G510H)(?:[);/ ]|$)',
        model: 'Galaxy J5 (2016)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J530',
        model: 'Galaxy J5 (2017)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G570[0FMY]',
        model: 'Galaxy J5 Prime',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J600[FGLN]',
        model: 'Galaxy J6',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J610[FG]',
        model: 'Galaxy J6+',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J410[FG]',
        model: 'Galaxy J4 Core',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J415(?:[FG]N|[FGN])',
        model: 'Galaxy J4+',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J7[01]0(?:FN|MN|[8FHKM])',
        model: 'Galaxy J7',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J700P',
        model: 'Galaxy J7 (2015)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:J700(?:T1|T)|J710GN|J7109)',
        model: 'Galaxy J7 (2016)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:J730[K]|J727(?:R4|[AFSU]))(?:[);/ ]|$)',
        model: 'Galaxy J7 (2017)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J737(?:R4|T1|VPP|[APSTUV])(?:[);/ ]|$)',
        model: 'Galaxy J7 (2018)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-C710F',
        model: 'Galaxy J7+ (C7)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G610[FMY]',
        model: 'Galaxy J7 Prime',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G611(?:FF|MT|M)',
        model: 'Galaxy J7 Prime 2',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G615F',
        model: 'Galaxy J7 Max',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:S727VL|S737TL)',
        model: 'Galaxy J7 Sky Pro',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:J7 Pro|J730(?:GM|[FG]))',
        model: 'Galaxy J7 Pro',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J701[FM]',
        model: 'Galaxy J7 Core',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J720[FM]',
        model: 'Galaxy J7 Duo',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:S767VL|S757BL)',
        model: 'Galaxy J7 Crown',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J727[PTV]',
        model: 'Galaxy J7 V',
      },
      {
        regex: 'SM-J7\\[7\\]',
        model: 'Galaxy J7 7',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J810',
        model: 'Galaxy J8',
      },
      {
        regex: 'SM-J8 Plus',
        model: 'Galaxy J8 Plus',
      },
      {
        regex: 'SM-J8 Pro',
        model: 'Galaxy J8 Pro',
      },
      {
        regex: 'SM-J9\\[7\\] Prime',
        model: 'Galaxy J9 7 Prime',
      },
      {
        regex: 'SM-J9\\[8\\] Pro',
        model: 'Galaxy J9 8 Pro',
      },
      {
        regex: '(?:SAMSUNG-)?SM-M015[FG]',
        model: 'Galaxy M01',
      },
      {
        regex: '(?:SAMSUNG-)?SM-M013F',
        model: 'Galaxy M01 Core',
      },
      {
        regex: '(?:SAMSUNG-)?SM-M017F',
        model: 'Galaxy M01s',
      },
      {
        regex: '(?:SAMSUNG-)?SM-M025F',
        model: 'Galaxy M02s',
      },
      {
        regex: '(?:SAMSUNG-)?SM-M105[FGMY]',
        model: 'Galaxy M10',
      },
      {
        regex: '(?:SAMSUNG-)?SM-M107F',
        model: 'Galaxy M10s',
      },
      {
        regex: '(?:SAMSUNG-)?SM-M115[FM]',
        model: 'Galaxy M11',
      },
      {
        regex: '(?:SAMSUNG-)?SM-M127[FG]',
        model: 'Galaxy M12',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:M205(?:[FGMN]|FN)|M20)(?:[);/ ]|$)',
        model: 'Galaxy M20',
      },
      {
        regex: '(?:SAMSUNG-)?SM-M215F',
        model: 'Galaxy M21',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:M307(?:FN|[0F])|M30s)',
        model: 'Galaxy M30s',
      },
      {
        regex: '(?:SAMSUNG-)?SM-M305?',
        model: 'Galaxy M30',
      },
      {
        regex: '(?:SAMSUNG-)?SM-M315F',
        model: 'Galaxy M31',
      },
      {
        regex: '(?:SAMSUNG-)?SM-M317F',
        model: 'Galaxy M31s',
      },
      {
        regex: '(?:SAMSUNG-)?SM-M405',
        model: 'Galaxy M40',
      },
      {
        regex: '(?:SAMSUNG-)?SM-M515F',
        model: 'Galaxy M51',
      },
      {
        regex: '(?:SAMSUNG-)?SM-W201([689])',
        model: 'Galaxy W201$1',
      },
      {
        regex: '(?:SAMSUNG-)?SM-W2015',
        model: 'Galaxy Golden 2',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G910S',
        model: 'Galaxy Round',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:G550(?:FY|T[12]?)|S550TL|G55[01]0|G5520)',
        model: 'Galaxy On5',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G5528',
        model: 'Galaxy On5 (2016)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G600(?:FY|[0F])',
        model: 'Galaxy On7',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G610[0KLS]',
        model: 'Galaxy On7 (2016)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G611[FKLS]',
        model: 'Galaxy On7 Prime',
      },
      {
        regex: '(?:SAMSUNG-)?SM-C500[0X]',
        model: 'Galaxy C5',
      },
      {
        regex: '(?:SAMSUNG-)?SM-C501[08]',
        model: 'Galaxy C5 Pro',
      },
      {
        regex: '(?:SAMSUNG-)?SM-C700[0X]',
        model: 'Galaxy C7',
      },
      {
        regex: '(?:SAMSUNG-)?SM-C701[08FX]',
        model: 'Galaxy C7 Pro',
      },
      {
        regex: '(?:SAMSUNG-)?SM-C710[08]',
        model: 'Galaxy C8',
      },
      {
        regex: '(?:SAMSUNG-)?SM-C900[08FY]',
        model: 'Galaxy C9 Pro',
      },
      {
        regex: '(?:SAMSUNG-)?SM-Z130H',
        model: 'Galaxy Z1',
      },
      {
        regex: '(?:SAMSUNG-)?SM-Z200[FMY]',
        model: 'Galaxy Z2',
      },
      {
        regex: '(?:SAMSUNG-)?SM-Z300H',
        model: 'Galaxy Z3',
      },
      {
        regex: '(?:SAMSUNG-)?SM-Z400[FY]',
        model: 'Galaxy Z4',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:G150(?:N[0KLS])?|G155S)(?:[);/ ]|$)',
        model: 'Galaxy Folder',
      },
      {
        regex: '(?:SAMSUNG-)?(?:SM-G16(?:0N|[05]0?|5N))(?:[);/ ]|$)',
        model: 'Galaxy Folder 2',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J321AZ(?:[);/ ]|$)',
        model: 'Galaxy Sol',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J326AZ(?:[);/ ]|$)',
        model: 'Galaxy Sol 2',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J336AZ(?:[);/ ]|$)',
        model: 'Galaxy Sol 3',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J727AZ(?:[);/ ]|$)',
        model: 'Galaxy Halo',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J327AZ',
        model: 'Galaxy Amp Prime 2',
      },
      {
        regex: '(?:SAMSUNG-)?SM-J337AZ',
        model: 'Galaxy Amp Prime 3 (2018)',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:F900[0FUW]|F907[BN])|SCV44',
        model: 'Galaxy Fold',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG-)?SM-F916(?:U1|[0BNQUW])|SCG05',
        model: 'Galaxy Z Fold 2 5G',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG-)?GT-I9060(?:[);/ ]|$)',
        model: 'Galaxy Grand Neo',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG-)?GT-I9063',
        model: 'Galaxy Grand Neo Duos',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG-)?GT-I9(?:080|128)',
        model: 'Galaxy Grand',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG-)?GT-I9168',
        model: 'Galaxy Grand Neo+',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG-)?GT-I9082',
        model: 'Galaxy Grand Duos',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG-)?GT-N7000',
        model: 'Galaxy Note',
        device: 'phablet',
      },
      {
        regex: '(?:SC-01G|SCL24)(?:[);/ ]|$)',
        model: 'Galaxy Note Edge',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG-)?SM-N935[FSLK](?:[);/ ]|$)',
        model: 'Galaxy Note Fan Edition',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG-)?(?:(?:GT-)?N7100|SCH-(?:I605|N719|R950)|SPH-L900)(?:[);/ ]|$)',
        model: 'Galaxy Note II',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG-)?GT-N7105',
        model: 'Galaxy Note II LTE',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G710(?:2T|5[HL]|[25689KLS])?(?:[);/ ]|$)',
        model: 'Galaxy Grand 2',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G720(?:AX|N0|[02])(?:[);/ ]|$)',
        model: 'Galaxy Grand Max',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:G530(?:[689]W|[AF]Z|BT|MU|R[47]|[AFHMPTWY])|G531[FH]|S920L)(?:[);/ ]|$)',
        model: 'Galaxy Grand Prime',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G531(?:BT|[MY])(?:[);/ ]|$)',
        model: 'Galaxy Grand Prime VE Duos',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G532F(?:[);/ ]|$)',
        model: 'Galaxy Grand Prime Plus',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G532MT(?:[);/ ]|$)',
        model: 'Galaxy J2 Prime (TV)',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G532[MG](?:[);/ ]|$)',
        model: 'Galaxy J2 Prime',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG-)?SM-N7502(?:[);/ ]|$)',
        model: 'Galaxy Note 3 Neo Duos',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG-)?SM-N750[05LQ]?',
        model: 'Galaxy Note 3 Neo',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG-)?SM-N9002(?:[);/ ]|$)',
        model: 'Galaxy Note 3 Duos',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG-)?SM-9005(?:[);/ ]|$)',
        model: 'Galaxy Note 3 LTE',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG-)?(?:SM-N900(?:W8|[05689][VQ]?|[AKLPSTV])?|SCL22|SC-01F(?:[);/ ]|$))',
        model: 'Galaxy Note 3',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG-)?SM-(?:N910|910U)|N9100(?:[);/ ]|$)',
        model: 'Galaxy Note 4',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG-)?SM-N916[KLS]',
        model: 'Galaxy Note 4 LTE',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG-)?SM-N915',
        model: 'Galaxy Note 4 Edge',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG-)?SM-N920(?:R[467]|W8|[0ACFGIKLPSTVX])',
        model: 'Galaxy Note 5',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG-)?SM-N9208',
        model: 'Galaxy Note 5 Duos',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G750(?:8Q|[9AFH])',
        model: 'Galaxy Mega 2',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG-)?GT-I915[028]',
        model: 'Galaxy Mega 5.8',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG-)?GT-I920[05]',
        model: 'Galaxy Mega 6.3',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG-)?(?:SM-N930(?:R[467]|W8|[0AFKLPSTUVX])|SCV34)',
        model: 'Galaxy Note 7',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG[- ])?SM-N950|SCV37|SC-01K',
        model: 'Galaxy Note 8',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG[- ])?(?:SM-N960|SCV40|SC-01L)',
        model: 'Galaxy Note 9',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG[- ])?SM-(?:N970(?:U1|W8|[089DFJKLSUWX])|N971N)',
        model: 'Galaxy Note 10',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG[- ])?SM-N770[FX]',
        model: 'Galaxy Note 10 Lite',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG[- ])?(?:SM-N975(?:U1|XU|[0CFUWX])|SM-N976[0BVNQU]|SC-01M|SCV45)',
        model: 'Galaxy Note 10+',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG[- ])?(?:SM-N980(?:F/DS|F))',
        model: 'Galaxy Note 20',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG[- ])?(?:SM-N981(?:B/DS|U1|[0BNUW]))',
        model: 'Galaxy Note 20 5G',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG[- ])?(?:SM-N985(?:F/DS|F))',
        model: 'Galaxy Note 20 Ultra',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG[- ])?(?:SM-N986(?:B/DS|U1|[0BNUW])|SC-53A|SCG06)',
        model: 'Galaxy Note 20 Ultra 5G',
        device: 'phablet',
      },
      {
        regex: '(?:SAMSUNG-)?SM-W750V',
        model: 'Ativ SE',
      },
      {
        regex: '(?:SAMSUNG-)?SM-G310R5',
        model: 'GreatCall Touch 3',
      },
      {
        regex: '(?:SAMSUNG-)?GT-E2152',
        model: 'E2152',
        device: 'feature phone',
      },
      {
        regex: '(?:SAMSUNG-)?(GT-(P|N8|N5)[0-9]+[a-z]?)',
        device: 'tablet',
        model: '$1',
      },
      {
        regex: 'SC-02C',
        model: 'Galaxy S II',
      },
      {
        regex: '(?:SAMSUNG-)?((?:SM-[TNP]|GT-P)[a-z0-9_\\-]+)',
        device: 'tablet',
        model: '$1',
      },
      {
        regex: '((?:SCH|SGH|SPH|SHV|SHW|GT|SM)-[a-z0-9_\\-]+)',
        model: '$1',
      },
      {
        regex: 'SMART-TV',
        device: 'tv',
        model: 'Smart TV',
      },
      {
        regex: 'Galaxy ([^/;]+) Build',
        model: 'Galaxy $1',
      },
      {
        regex: 'Galaxy ([a-z0-9]+)',
        model: 'Galaxy $1',
      },
      {
        regex: 'SAMSUNG[\\-][ ]?([a-z0-9]+[\\-_][a-z0-9]+)',
        model: '$1',
      },
      {
        regex: 'SAMSUNG;[ ]?([a-z0-9]+[\\-_][a-z0-9]+)',
        model: '$1',
      },
      {
        regex: 'SAMSUNG[ _/\\-]?([a-z0-9\\-]+)',
        model: '$1',
      },
      {
        regex: 'SAMSUNG;[ ]?([a-z0-9 ]+)',
        model: '$1',
      },
      {
        regex: 'SEC-([a-z0-9]+)',
        model: '$1',
      },
      {
        regex: 'SAM-([a-z0-9]+)',
        model: 'SCH-$1',
      },
      {
        regex: '(?:portalmmm|o2imode)/2\\.0 ([SZ][a-z0-9]+)',
        model: '$1',
      },
      {
        regex: 'sam([rua][0-9]+)',
        model: 'SCH-$1',
      },
    ],
  },
  Vivo: {
    regex:
      '((?:VIV-|BBG-)?(?<!FBCR/)vivo(?!(?:Browser)))|(?:V1730(D[AT]|GA)|V18(18CA|01A0|13B[AT]|18T|09[AT]|1[346][AT]|[13]8[AT]|14A|24[B]?A|2[19][AT]|3[12][AT]|36[AT])|V1731CA|V1732[AT]|V1818CT|V19[01]1[AT]|V1932[AT]|V191[3469][AT]|V192[1348]A|V193[04]A|V194[15]A|V1938CT|V1955A|V1938T|V1730EA|V19[26]2A|V196[35]A|V198[16]A|V1936A[L]?|V19[59]0A|V200[125]A|1819|V201[12]A|V202[0345]C?A|V202[235-9]|V2054A|V203[026]|V204[03]|V2049A|X50 Pro\\+|I1927)(?:[);/ ]|$)',
    device: 'smartphone',
    models: [
      {
        regex: 'V1824[B]?A(?:[);/ ]|$)',
        model: 'iQOO',
      },
      {
        regex: 'V1955A(?:[);/ ]|$)',
        model: 'iQOO 3',
      },
      {
        regex: 'I1927(?:[);/ ]|$)',
        model: 'iQOO 3 5G',
      },
      {
        regex: 'V2049A(?:[);/ ]|$)',
        model: 'iQOO 7',
      },
      {
        regex: 'V1922A(?:[);/ ]|$)',
        model: 'iQOO Pro',
      },
      {
        regex: 'V1916A(?:[);/ ]|$)',
        model: 'iQOO Pro 5G',
      },
      {
        regex: 'V1914A(?:[);/ ]|$)',
        model: 'iQOO Neo',
      },
      {
        regex: 'V1981A(?:[);/ ]|$)',
        model: 'iQOO Neo 3',
      },
      {
        regex: 'V1936A[L]?(?:[);/ ]|$)',
        model: 'iQOO Neo 855',
      },
      {
        regex: 'V1986A(?:[);/ ]|$)',
        model: 'iQOO Z1',
      },
      {
        regex: 'V2012A(?:[);/ ]|$)',
        model: 'iQOO Z1x',
      },
      {
        regex: 'V1919A(?:[);/ ]|$)',
        model: 'iQOO Z5x',
      },
      {
        regex: 'V2023A(?:[);/ ]|$)',
        model: 'iQOO U1',
      },
      {
        regex: 'V2024A(?:[);/ ]|$)',
        model: 'iQOO 5',
      },
      {
        regex: 'V2025A(?:[);/ ]|$)',
        model: 'iQOO 5 Pro',
      },
      {
        regex: 'V2025(?:[);/ ]|$)',
        model: 'V20',
      },
      {
        regex: 'V2040(?:[);/ ]|$)',
        model: 'V20 (2021)',
      },
      {
        regex: 'vivo 1805(?:[);/ ]|$)',
        model: 'Nex',
      },
      {
        regex: 'V1923A(?:[);/ ]|$)',
        model: 'Nex 3',
      },
      {
        regex: 'V1924A(?:[);/ ]|$)',
        model: 'Nex 3 5G',
      },
      {
        regex: 'V1950A(?:[);/ ]|$)',
        model: 'Nex 3S',
      },
      {
        regex: 'V1821[AT](?:[);/ ]|$)',
        model: 'Nex Dual Display',
      },
      {
        regex: 'Vivo ONE(?:[);/ ]|$)',
        model: 'One',
      },
      {
        regex: 'V1831[AT](?:[);/ ]|$)',
        model: 'S1',
      },
      {
        regex: 'V1832[AT](?:[);/ ]|$)',
        model: 'S1 Pro',
      },
      {
        regex: 'V1932[AT](?:[);/ ]|$)',
        model: 'S5',
      },
      {
        regex: 'V1962A(?:[);/ ]|$)',
        model: 'S6 5G',
      },
      {
        regex: 'V2020C?A(?:[);/ ]|$)',
        model: 'S7',
      },
      {
        regex: 'V1941A(?:[);/ ]|$)',
        model: 'U3',
      },
      {
        regex: 'V1928A(?:[);/ ]|$)',
        model: 'U3X',
      },
      {
        regex: 'vivo 1804(?:[);/ ]|$)',
        model: 'V11 Pro',
      },
      {
        regex: 'vivo 1806(?:[);/ ]|$)',
        model: 'V11i',
      },
      {
        regex: '1819(?:[);/ ]|$)',
        model: 'V15',
      },
      {
        regex: 'vivo 1818(?:[);/ ]|$)',
        model: 'V15 Pro',
      },
      {
        regex: 'vivo 1909(?:[);/ ]|$)',
        model: 'V17 Pro',
      },
      {
        regex: 'V2022(?:[);/ ]|$)',
        model: 'V20 SE',
      },
      {
        regex: '(?:VIV-|BBG-)?vivo[ _]1601(?:[);/ ]|$)',
        model: 'V5',
      },
      {
        regex: 'vivo 1609(?:[);/ ]|$)',
        model: 'V5 Lite',
      },
      {
        regex: 'vivo 1611(?:[);/ ]|$)',
        model: 'V5 Plus',
      },
      {
        regex: 'vivo (1713|1612)(?:[);/ ]|$)',
        model: 'V5s',
      },
      {
        regex: 'vivo 1718(?:[);/ ]|$)',
        model: 'V7',
      },
      {
        regex: 'vivo 1716(?:[);/ ]|$)',
        model: 'V7 Plus',
      },
      {
        regex: 'vivo 1723(?:[);/ ]|$)',
        model: 'V9',
      },
      {
        regex: 'vivo 1727(?:[);/ ]|$)',
        model: 'V9 Youth',
      },
      {
        regex: 'vivo 1721(?:[);/ ]|$)',
        model: 'X20',
      },
      {
        regex: 'X20Plus(?:[);/ ]|$)',
        model: 'X20 Plus',
      },
      {
        regex: 'vivo 1725(?:[);/ ]|$)',
        model: 'X21',
      },
      {
        regex: 'V1814[AT](?:[);/ ]|$)',
        model: 'X21S',
      },
      {
        regex: 'V1809[AT](?:[);/ ]|$)',
        model: 'X23',
      },
      {
        regex: 'V1816[AT](?:[);/ ]|$)',
        model: 'X23',
      },
      {
        regex: 'V18(38|29)[AT](?:[);/ ]|$)',
        model: 'X27',
      },
      {
        regex: 'V1836[AT](?:[);/ ]|$)',
        model: 'X27 Pro',
      },
      {
        regex: 'V1938CT(?:[);/ ]|$)',
        model: 'X30',
      },
      {
        regex: 'V1938T(?:[);/ ]|$)',
        model: 'X30 Pro',
      },
      {
        regex: 'V2001A(?:[);/ ]|$)',
        model: 'X50',
      },
      {
        regex: 'V2005A(?:[);/ ]|$)',
        model: 'X50 Pro',
      },
      {
        regex: '(?:V2011A|X50 Pro\\+)(?:[);/ ]|$)',
        model: 'X50 Pro Plus',
      },
      {
        regex: 'X9Plus(?:[);/ ]|$)',
        model: 'X9 Plus',
      },
      {
        regex: 'vivo 1902(?:[);/ ]|$)',
        model: 'Y17',
      },
      {
        regex: 'vivo 1915(?:[);/ ]|$)',
        model: 'Y19',
      },
      {
        regex: 'V202[79](?:[);/ ]|$)',
        model: 'Y20',
      },
      {
        regex: 'V2028(?:[);/ ]|$)',
        model: 'Y11s',
      },
      {
        regex: 'V2043(?:[);/ ]|$)',
        model: 'Y20 (2021)',
      },
      {
        regex: 'V2032(?:[);/ ]|$)',
        model: 'Y20i',
      },
      {
        regex: 'V2023(?:[);/ ]|$)',
        model: 'V20 SE',
      },
      {
        regex: 'V1901[AT](?:[);/ ]|$)',
        model: 'Y3',
      },
      {
        regex: 'V1930A(?:[);/ ]|$)',
        model: 'Y3 Standard',
      },
      {
        regex: 'V2036(?:[);/ ]|$)',
        model: 'Y31',
      },
      {
        regex: 'V1934A(?:[);/ ]|$)',
        model: 'Y5s',
      },
      {
        regex: 'V1965A(?:[);/ ]|$)',
        model: 'Y50',
      },
      {
        regex: 'V2030(?:[);/ ]|$)',
        model: 'Y51',
      },
      {
        regex: 'V2054A(?:[);/ ]|$)',
        model: 'Y31s',
      },
      {
        regex: 'vivo 1606(?:[);/ ]|$)',
        model: 'Y53i',
      },
      {
        regex: 'vivo 1603(?:[);/ ]|$)',
        model: 'Y55l',
      },
      {
        regex: 'vivo 1610(?:[);/ ]|$)',
        model: 'Y55s',
      },
      {
        regex: 'vivo 1719(?:[);/ ]|$)',
        model: 'Y65',
      },
      {
        regex: 'vivo 1714(?:[);/ ]|$)',
        model: 'Y69',
      },
      {
        regex: 'V2002A(?:[);/ ]|$)',
        model: 'Y70s',
      },
      {
        regex: 'vivo 1724(?:[);/ ]|$)',
        model: 'Y71',
      },
      {
        regex: 'vivo 1801(?:[);/ ]|$)',
        model: 'Y71i',
      },
      {
        regex: 'V1731CA(?:[);/ ]|$)',
        model: 'Y73',
      },
      {
        regex: 'V1913[AT](?:[);/ ]|$)',
        model: 'Y7s',
      },
      {
        regex: 'vivo 180([38]|8i)(?:[);/ ]|$)',
        model: 'Y81',
      },
      {
        regex: 'vivo 1812(?:[);/ ]|$)',
        model: 'Y81i',
      },
      {
        regex: 'V1732[AT](?:[);/ ]|$)',
        model: 'Y81s',
      },
      {
        regex: 'vivo 1726(?:[);/ ]|$)',
        model: 'Y83 Pro',
      },
      {
        regex: 'V1730EA(?:[);/ ]|$)',
        model: 'Y89',
      },
      {
        regex: 'vivo 181[17](?:[);/ ]|$)',
        model: 'Y91',
      },
      {
        regex: 'V1945A(?:[);/ ]|$)',
        model: 'Y9s',
      },
      {
        regex: 'V2026(?:[);/ ]|$)',
        model: 'Y12s',
      },
      {
        regex: 'vivo 18(16|20)(?:[);/ ]|$)',
        model: 'Y91i',
      },
      {
        regex: '(V1818[AT]|vivo 181[45])(?:[);/ ]|$)',
        model: 'Y93',
      },
      {
        regex: 'V1818C[AT](?:[);/ ]|$)',
        model: 'Y93s',
      },
      {
        regex: 'vivo 1807(?:[);/ ]|$)',
        model: 'Y95',
      },
      {
        regex: 'V1813[AT](?:[);/ ]|$)',
        model: 'Y97',
      },
      {
        regex: 'V1801A0(?:[);/ ]|$)',
        model: 'Z1',
      },
      {
        regex: 'V1730D[AT](?:[);/ ]|$)',
        model: 'Z1i',
      },
      {
        regex: 'vivo 1917(?:[);/ ]|$)',
        model: 'Z1x',
      },
      {
        regex: 'V1813B[AT](?:[);/ ]|$)',
        model: 'Z3',
      },
      {
        regex: 'V1730GA(?:[);/ ]|$)',
        model: 'Z3x',
      },
      {
        regex: 'V1921A(?:[);/ ]|$)',
        model: 'Z5',
      },
      {
        regex: 'V1911A(?:[);/ ]|$)',
        model: 'Z5x',
      },
      {
        regex: 'V1990A(?:[);/ ]|$)',
        model: 'Z5x (2020)',
      },
      {
        regex: 'V1963A(?:[);/ ]|$)',
        model: 'Z6',
      },
      {
        regex: '(?:VIV-|BBG-)?vivo[ _]([^/;]+) Build',
        model: '$1',
      },
      {
        regex: '(?:VIV-|BBG-)?vivo[ _]([^);/]+)(?:[);/]|$)',
        model: '$1',
      },
    ],
  },
  Xiaomi: {
    regex:
      'Xiaomi(?!(?:Miui|Mint[ ])Browser)|Mi9 Pro 5G|(?:MI [a-z0-9]+|Mi-4c|MI-One[ _]?[a-z0-9]+|MIX(?: 2S?)?)(?:[); ]|$)|HM (?:[^;]+) (?:Build|MIUI)|(?:2014501|2014011|201481[12378]|201302[23]|2013061) Build|Redmi|POCOPHONE|(?:SHARK )?(KLE|MBU)-[AH]0|SKR-[AH]0|SKW-[AH]0|POCO F1|DLT-[AH]0|MIBOX[234]([_ ]PRO)?|MiTV4[CSX]?|MiTV-(MSSP[01]|AXSO0)|AWM-A0|MI CC 9 Meitu Edition|MiBOX1S|MiTV4A|M2006J10C|M2006C3(?:L[IGC]|LVG|MN?G)|M2007J1(?:7[CGI]|SC)|M2002J9[EG]|HM2014819|WT88047|M2004J(?:7[AB]|19)C|M2012K11C|M2011K2[CG]|M2006C3[ML]II|M2003J15SC|M2007J3S[ICYGP]|M2007J22[CG]|M2101K6[GI]|M2101K(?:[79]AG|7AI)|M2010J19S[CGYI]|HM NOTE 1(?:LTE|W)|MI[_ ]PLAY|XIG01|MI_(NOTE_Pro|5X|4i|(?:A2|8)_Lite)',
    regex_ori:
      'Xiaomi(?!/(?:Miui|Mint[ ])Browser)|Mi9 Pro 5G|(?:MI [a-z0-9]+|Mi-4c|MI-One[ _]?[a-z0-9]+|MIX(?: 2S?)?)(?:[);/ ]|$)|HM (?:[^/;]+) (?:Build|MIUI)|(?:2014501|2014011|201481[12378]|201302[23]|2013061) Build|Redmi|POCOPHONE|(?:SHARK )?(KLE|MBU)-[AH]0|SKR-[AH]0|SKW-[AH]0|POCO F1|DLT-[AH]0|MIBOX[234]([_ ]PRO)?|MiTV4[CSX]?|MiTV-(MSSP[01]|AXSO0)|AWM-A0|MI CC 9 Meitu Edition|MiBOX1S|MiTV4A|M2006J10C|M2006C3(?:L[IGC]|LVG|MN?G)|M2007J1(?:7[CGI]|SC)|M2002J9[EG]|HM2014819|WT88047|M2004J(?:7[AB]|19)C|M2012K11C|M2011K2[CG]|M2006C3[ML]II|M2003J15SC|M2007J3S[ICYGP]|M2007J22[CG]|M2101K6[GI]|M2101K(?:[79]AG|7AI)|M2010J19S[CGYI]|HM NOTE 1(?:LTE|W)|MI[_ ]PLAY|XIG01|MI_(NOTE_Pro|5X|4i|(?:A2|8)_Lite)',
    device: 'smartphone',
    models: [
      {
        regex: 'SKR-[AH]0',
        model: 'Black Shark',
      },
      {
        regex: 'AWM-A0',
        model: 'Black Shark Helo',
      },
      {
        regex: 'SKW-[AH]0',
        model: 'Black Shark 2',
      },
      {
        regex: 'DLT-[AH]0',
        model: 'Black Shark 2 Pro',
      },
      {
        regex: '(?:SHARK )?KLE-A0',
        model: 'Black Shark 3',
      },
      {
        regex: '(?:SHARK )?KLE-H0',
        model: 'Black Shark 3 5G',
      },
      {
        regex: '(?:SHARK )?MBU-H0',
        model: 'Black Shark 3 Pro 5G',
      },
      {
        regex: '(?:SHARK )?MBU-A0',
        model: 'Black Shark 3 Pro',
      },
      {
        regex: 'Xiaomi_2014501|2014501 Build',
        model: 'Hongmi 4G',
      },
      {
        regex: 'Xiaomi_2014011|2014011 Build',
        model: 'Hongmi 1S',
      },
      {
        regex: 'Xiaomi_201302[23]|201302[23] Build',
        model: 'Hongmi',
      },
      {
        regex: 'Xiaomi[_-]2014818|2014818 Build',
        model: 'Hongmi 2 3G',
      },
      {
        regex: 'Xiaomi_2014817|2014817 Build',
        model: 'Hongmi 2',
      },
      {
        regex: 'Xiaomi[_-]201481[123]|201481[123] Build',
        model: 'Hongmi 2 4G',
      },
      {
        regex: 'MI[_ ]PLAY(?:[);/ ]|$)',
        model: 'MI Play',
      },
      {
        regex: 'Mi 9 SE(?:[);/ ]|$)',
        model: 'MI 9 SE',
      },
      {
        regex: 'MI CC 9 Meitu Edition(?:[);/ ]|$)',
        model: 'MI CC 9',
      },
      {
        regex: 'Xiaomi_M2001J2E_TD-LTE(?:[);/ ]|$)',
        model: 'MI 10',
      },
      {
        regex: 'M2011K2[CG](?:[);/ ]|$)',
        model: 'MI 11',
      },
      {
        regex: 'M2007J3S[CYP](?:[);/ ]|$)',
        model: 'MI 10T 5G',
      },
      {
        regex: 'M2007J3S[GI](?:[);/ ]|$)',
        model: 'MI 10T Pro 5G',
      },
      {
        regex: 'M2007J17G(?:[);/ ]|$)',
        model: 'MI 10T Lite 5G',
      },
      {
        regex: 'M2007J1SC(?:[);/ ]|$)',
        model: 'MI 10 Ultra 5G',
      },
      {
        regex: '(?:M2002J9[EG]|XIG01)(?:[);/ ]|$)',
        model: 'MI 10 Lite 5G',
      },
      {
        regex: 'M2007J17I(?:[);/ ]|$)',
        model: 'MI 10i',
      },
      {
        regex: 'M2101K9AG(?:[);/ ]|$)',
        model: 'MI 11 Lite',
      },
      {
        regex: 'MI[ _]8[ _]Lite(?:[);/ ]|$)',
        model: 'MI 8 Lite',
      },
      {
        regex: 'Mi 9T Pro(?:[);/ ]|$)',
        model: 'MI 9T Pro',
      },
      {
        regex: 'Mi9 Pro 5G(?:[);/ ]|$)',
        model: 'MI 9 Pro 5G',
      },
      {
        regex: 'MI ([89]) Lite(?:[);/ ]|$)',
        model: 'MI $1 Lite',
      },
      {
        regex: 'MI 5s Plus(?:[);/ ]|$)',
        model: 'MI 5s Plus',
      },
      {
        regex: 'Xiaomi_2013061|2013061 Build',
        model: 'MI 3',
      },
      {
        regex: 'Mi-4c(?:[);/ ]|$)',
        model: 'MI 4C',
      },
      {
        regex: 'MI 4W(?:[);/ ]|$)',
        model: 'MI 4W',
      },
      {
        regex: 'Mi_4i(?:[);/ ]|$)',
        model: 'MI 4i',
      },
      {
        regex: 'MI MAX 3(?:[);/ ]|$)',
        model: 'MI MAX 3',
      },
      {
        regex: 'MI MAX 2(?:[);/ ]|$)',
        model: 'MI MAX 2',
      },
      {
        regex: 'Mi[ _]A2[ _]Lite(?:[);/ ]|$)',
        model: 'MI A2 Lite',
      },
      {
        regex: 'MIX 3(?:[);/ ]|$)',
        model: 'MI MIX 3',
      },
      {
        regex: 'MIX 2S(?:[);/ ]|$)',
        model: 'MI MIX 2S',
      },
      {
        regex: 'MIX 2(?:[);/ ]|$)',
        model: 'MI MIX 2',
      },
      {
        regex: 'MIX(?:[);/ ]|$)',
        model: 'MI MIX',
      },
      {
        regex: 'POCOPHONE[ _]F1|POCO F1',
        model: 'Pocophone F1',
      },
      {
        regex: 'Redmi 5 Plus',
        model: 'Redmi 5 Plus',
      },
      {
        regex: 'WT88047(?:[);/ ]|$)',
        model: 'Redmi 2',
      },
      {
        regex: 'HM2014819(?:[);/ ]|$)',
        model: 'Redmi 2 Pro',
      },
      {
        regex: 'HM 2A(?:[);/ ]|$)',
        model: 'Redmi 2A',
      },
      {
        regex: 'HM 1S[CW]?(?:[);/ ]|$)',
        model: 'Redmi 1S',
      },
      {
        regex: 'HM 1(?:[);/ ]|$)',
        model: 'Redmi 1',
      },
      {
        regex: 'M2004J7AC(?:[);/ ]|$)',
        model: 'Redmi 10X',
      },
      {
        regex: '(?:M2004J19C|M2006C3MII)(?:[);/ ]|$)',
        model: 'Redmi 9',
      },
      {
        regex: 'M2010J19SI(?:[);/ ]|$)',
        model: 'Redmi 9 Power',
      },
      {
        regex: 'M2006C3L[GCI](?:[);/ ]|$)',
        model: 'Redmi 9A',
      },
      {
        regex: 'M2006C3LII(?:[);/ ]|$)',
        model: 'Redmi 9i',
      },
      {
        regex: 'M2006C3MG(?:[);/ ]|$)',
        model: 'Redmi 9C',
      },
      {
        regex: 'M2006C3LVG(?:[);/ ]|$)',
        model: 'Redmi 9AT',
      },
      {
        regex: 'M2010J19S[GY](?:[);/ ]|$)',
        model: 'Redmi 9T',
      },
      {
        regex: 'M2006C3MNG(?:[);/ ]|$)',
        model: 'Redmi 9C NFC',
      },
      {
        regex: 'M2004J7BC(?:[);/ ]|$)',
        model: 'Redmi 10X Pro',
      },
      {
        regex: 'Redmi K20 Pro(?:[);/ ]|$)',
        model: 'Redmi K20 Pro',
      },
      {
        regex: 'Redmi K30 5G(?:[);/ ]|$)',
        model: 'Redmi K30 5G',
      },
      {
        regex: 'M2012K11C(?:[);/ ]|$)',
        model: 'Redmi K40 Pro',
      },
      {
        regex: 'M2006J10C(?:[);/ ]|$)',
        model: 'Redmi K30 Ultra',
      },
      {
        regex: 'Redmi Y1 Lite(?:[);/ ]|$)',
        model: 'Redmi Y1 Lite',
      },
      {
        regex: 'MI PAD 4 PLUS(?:[);/ ]|$)',
        model: 'Mi Pad 4 Plus',
        device: 'tablet',
      },
      {
        regex: 'MI PAD 4(?:[);/ ]|$)',
        model: 'Mi Pad 4',
        device: 'tablet',
      },
      {
        regex: 'MI PAD 3(?:[);/ ]|$)',
        model: 'Mi Pad 3',
        device: 'tablet',
      },
      {
        regex: 'MI PAD 2(?:[);/ ]|$)',
        model: 'Mi Pad 2',
        device: 'tablet',
      },
      {
        regex: 'MI PAD(?:[);/ ]|$)',
        model: 'Mi Pad',
        device: 'tablet',
      },
      {
        regex: 'MIBOX3[ _]Pro(?:[);/ ]|$)',
        model: 'Mi Box 3 Pro',
        device: 'tv',
      },
      {
        regex: 'MIBOX([234])(?:[);/ ]|$)',
        model: 'Mi Box $1',
        device: 'tv',
      },
      {
        regex: 'MiBOX1S(?:[);/ ]|$)',
        model: 'Mi Box 1S',
        device: 'tv',
      },
      {
        regex: 'MiTV-MSSP1(?:[);/ ]|$)',
        model: 'MiTV 4S',
        device: 'tv',
      },
      {
        regex: '(?:MiTV-AXSO0|MiTV4(?:A|-ANSM0)|MiTV-MSSP0)(?:[);/ ]|$)',
        model: 'MiTV 4A',
        device: 'tv',
      },
      {
        regex: '(MiTV)(4[CSX]|4)(?:[);/ ]|$)',
        model: '$1 $2',
        device: 'tv',
      },
      {
        regex: 'HM NOTE 1W(?:[);/ ]|$)',
        device: 'phablet',
        model: 'Redmi Note',
      },
      {
        regex: 'HM NOTE 1TD (?:Build|MIUI)',
        device: 'phablet',
        model: 'Hongmi Note 1TD',
      },
      {
        regex: 'HM NOTE 1(?:LTE|S)(?:W|GLOBAL|TD)? (?:Build|MIUI)|HM NOTE 1LTE',
        device: 'phablet',
        model: 'Redmi Note 4G',
      },
      {
        regex: 'Redmi Note 5A Prime',
        model: 'Redmi Note 5A Prime',
        device: 'phablet',
      },
      {
        regex: 'M2010J19SC(?:[);/ ]|$)',
        model: 'Redmi Note 9',
        device: 'phablet',
      },
      {
        regex: 'M2003J15SC(?:[);/ ]|$)',
        model: 'Redmi Note 10X',
        device: 'phablet',
      },
      {
        regex: 'M2007J22G(?:[);/ ]|$)',
        model: 'Redmi Note 9T 5G',
        device: 'phablet',
      },
      {
        regex: 'M2007J22C(?:[);/ ]|$)',
        model: 'Redmi Note 9 5G',
        device: 'phablet',
      },
      {
        regex: 'M2007J17C(?:[);/ ]|$)',
        model: 'Redmi Note 9 Pro 5G',
        device: 'phablet',
      },
      {
        regex: 'M2101K7A[GI]',
        model: 'Redmi Note 10',
        device: 'phablet',
      },
      {
        regex: 'M2101K6[GI]',
        model: 'Redmi Note 10 Pro',
        device: 'phablet',
      },
      {
        regex: 'Redmi Note ([5-9]) Pro(?:[);/ ]|$)',
        model: 'Redmi Note $1 Pro',
        device: 'phablet',
      },
      {
        regex: 'Redmi[ _]Note[ _]([^;/) ]+)?',
        model: 'Redmi Note $1',
        device: 'phablet',
      },
      {
        regex: 'Redmi[ _]([^;/) ]+)?',
        model: 'Redmi $1',
      },
      {
        regex: 'MI_NOTE_Pro',
        model: 'MI Note Pro',
        device: 'phablet',
      },
      {
        regex: 'Mi Note 10 Pro',
        model: 'Mi Note 10 Pro',
        device: 'phablet',
      },
      {
        regex: 'MI[ _]Note[ _]([^;/) ]+)?',
        model: 'MI Note $1',
        device: 'phablet',
      },
      {
        regex: '(MI(?:-One)?[ _](?:[^;/]*))Build',
        model: '$1',
      },
      {
        regex: '(MI[ _][a-z0-9]+|MI-One[ _]?[a-z0-9]+)(?:[);/ ]|$)',
        model: '$1',
      },
      {
        regex: 'HM Note ([^/;]+) (?:Build|MIUI)',
        device: 'phablet',
        model: 'Note',
      },
      {
        regex: 'HM ([^/;]+) (?:Build|MIUI)',
        model: 'HM $1',
      },
      {
        regex: 'Xiaomi[ _-]([^/;]+)(?: Build|$)',
        model: '$1',
      },
    ],
  },
};

export { mobileModelList };
export default mobileModelList;
