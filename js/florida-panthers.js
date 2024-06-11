window.onload = function() {
    var ctx = document.getElementById('myChart');
    ctx.height = 600; // Set the height as needed
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                data: [{x: '2023-10-14', y: 1533.1842956522091}, {x: '2023-10-16', y: 1535.427189836934}, {x: '2023-10-19', y: 1538.6432849190576}, {x: '2023-10-21', y: 1533.816459657657}, {x: '2023-10-24', y: 1536.0679330393516}, {x: '2023-10-28', y: 1537.5473757134662}, {x: '2023-10-30', y: 1535.6433826292032}, {x: '2023-11-02', y: 1539.3690883911331}, {x: '2023-11-04', y: 1534.284325791107}, {x: '2023-11-06', y: 1535.868639837378}, {x: '2023-11-08', y: 1538.4650621172343}, {x: '2023-11-10', y: 1542.3639181929068}, {x: '2023-11-12', y: 1543.8456385556733}, {x: '2023-11-14', y: 1546.8088106227988}, {x: '2023-11-16', y: 1544.5767762846556}, {x: '2023-11-17', y: 1546.8380619208551}, {x: '2023-11-20', y: 1549.5635382494206}, {x: '2023-11-22', y: 1545.2611597731266}, {x: '2023-11-24', y: 1539.450059458875}, {x: '2023-11-27', y: 1545.041062162646}, {x: '2023-11-28', y: 1542.9308915087383}, {x: '2023-11-30', y: 1547.4598320542127}, {x: '2023-12-02', y: 1544.1799735543373}, {x: '2023-12-06', y: 1546.0639138671672}, {x: '2023-12-08', y: 1548.9272247718968}, {x: '2023-12-10', y: 1552.9401188093143}, {x: '2023-12-12', y: 1546.5484042144433}, {x: '2023-12-14', y: 1542.1108975639158}, {x: '2023-12-16', y: 1547.9156703306658}, {x: '2023-12-18', y: 1544.171174836292}, {x: '2023-12-21', y: 1538.1942889865416}, {x: '2023-12-23', y: 1541.406064290661}, {x: '2023-12-27', y: 1544.1970203551418}, {x: '2023-12-29', y: 1546.3671050275404}, {x: '2023-12-30', y: 1548.9966941591904}, {x: '2024-01-02', y: 1553.3946304244178}, {x: '2024-01-04', y: 1558.4173086919145}, {x: '2024-01-06', y: 1564.752668000211}, {x: '2024-01-09', y: 1570.0255069047062}, {x: '2024-01-11', y: 1571.711765873138}, {x: '2024-01-13', y: 1564.7879921528415}, {x: '2024-01-15', y: 1560.8892188520292}, {x: '2024-01-17', y: 1557.4484433691605}, {x: '2024-01-19', y: 1552.1604422430337}, {x: '2024-01-22', y: 1556.9131029328612}, {x: '2024-01-24', y: 1560.0777734009512}, {x: '2024-01-26', y: 1562.5925469679555}, {x: '2024-01-27', y: 1564.7498332901184}, {x: '2024-02-06', y: 1561.1872028150133}, {x: '2024-02-08', y: 1563.4844428869287}, {x: '2024-02-10', y: 1567.958326302683}, {x: '2024-02-14', y: 1572.6311236845138}, {x: '2024-02-15', y: 1577.096861305026}, {x: '2024-02-17', y: 1583.9496307792117}, {x: '2024-02-20', y: 1585.2270793746688}, {x: '2024-02-22', y: 1583.0288510072005}, {x: '2024-02-24', y: 1584.4139901831666}, {x: '2024-02-27', y: 1585.7405503202606}, {x: '2024-02-29', y: 1586.780808646069}, {x: '2024-03-02', y: 1591.5013810958585}, {x: '2024-03-04', y: 1595.596500884628}, {x: '2024-03-05', y: 1598.4959195277142}, {x: '2024-03-07', y: 1594.7289907624272}, {x: '2024-03-09', y: 1598.0468452941464}, {x: '2024-03-12', y: 1600.4754503268423}, {x: '2024-03-14', y: 1595.554309546796}, {x: '2024-03-16', y: 1590.3421021208007}, {x: '2024-03-21', y: 1584.082387582039}, {x: '2024-03-23', y: 1581.9679302817342}, {x: '2024-03-24', y: 1585.8586272050356}, {x: '2024-03-26', y: 1582.6826607652974}, {x: '2024-03-28', y: 1578.9751992581512}, {x: '2024-03-30', y: 1580.323175537014}, {x: '2024-04-01', y: 1576.8686211781935}, {x: '2024-04-02', y: 1571.8911978895126}, {x: '2024-04-04', y: 1576.9904608668894}, {x: '2024-04-06', y: 1574.8257828083838}, {x: '2024-04-09', y: 1576.891095923938}, {x: '2024-04-11', y: 1579.2332620042052}, {x: '2024-04-13', y: 1580.6594655675992}, {x: '2024-04-16', y: 1584.1944404244298}, {x: '2024-04-21', y: 1585.818815148302}, {x: '2024-04-23', y: 1587.4157194591137}, {x: '2024-04-25', y: 1591.3768322929022}, {x: '2024-04-27', y: 1586.793635560923}, {x: '2024-04-29', y: 1590.4874860161522}, {x: '2024-05-06', y: 1583.4063297806258}, {x: '2024-05-08', y: 1587.4869696652208}, {x: '2024-05-10', y: 1593.1690599526426}, {x: '2024-05-12', y: 1595.6923995259424}, {x: '2024-05-14', y: 1592.2925509475767}, {x: '2024-05-17', y: 1594.8339255905485}, {x: '2024-05-22', y: 1600.2951001968856}, {x: '2024-05-24', y: 1598.1947636459497}, {x: '2024-05-26', y: 1595.1120129186654}, {x: '2024-05-28', y: 1596.9642239371208}, {x: '2024-05-30', y: 1599.7747592538162}, {x: '2024-06-01', y: 1601.5428733473775}, {x: '2024-06-08', y: 1604.798143114955}, {x: '2024-06-10', y: 1604.798143114955}],
                borderColor: '#3935DA',
                fill: false,
                pointRadius: 0,
                borderWidth: 2 // Adjust as needed
            },
            {
                label: 'Min',
                data: [{x: '2023-10-14', y: 1458.7816769817323}, {x: '2023-10-16', y: 1458.7816769817323}, {x: '2023-10-19', y: 1452.659948939231}, {x: '2023-10-21', y: 1449.1220419021545}, {x: '2023-10-24', y: 1446.87056852046}, {x: '2023-10-28', y: 1440.850702784126}, {x: '2023-10-30', y: 1438.4355316085198}, {x: '2023-11-02', y: 1432.4227289413968}, {x: '2023-11-04', y: 1426.5125570078048}, {x: '2023-11-06', y: 1426.5125570078048}, {x: '2023-11-08', y: 1428.7776569170198}, {x: '2023-11-10', y: 1428.4253399295633}, {x: '2023-11-12', y: 1425.1814604689946}, {x: '2023-11-14', y: 1422.2182884018691}, {x: '2023-11-16', y: 1428.6068214051284}, {x: '2023-11-17', y: 1428.6068214051284}, {x: '2023-11-20', y: 1426.571077880094}, {x: '2023-11-22', y: 1422.0673791819768}, {x: '2023-11-24', y: 1419.470536406789}, {x: '2023-11-27', y: 1425.2335956694112}, {x: '2023-11-28', y: 1425.2335956694112}, {x: '2023-11-30', y: 1422.9504781688645}, {x: '2023-12-02', y: 1429.1388851146744}, {x: '2023-12-06', y: 1431.4087832541493}, {x: '2023-12-08', y: 1434.7726345461049}, {x: '2023-12-10', y: 1433.5130035561965}, {x: '2023-12-12', y: 1436.2982159694657}, {x: '2023-12-14', y: 1435.5593150652985}, {x: '2023-12-16', y: 1434.5190976337649}, {x: '2023-12-18', y: 1431.992839508311}, {x: '2023-12-21', y: 1423.5455548191892}, {x: '2023-12-23', y: 1421.262961340892}, {x: '2023-12-27', y: 1418.6237538293117}, {x: '2023-12-29', y: 1414.0166668147829}, {x: '2023-12-30', y: 1414.0166668147829}, {x: '2024-01-02', y: 1408.6886265533803}, {x: '2024-01-04', y: 1406.9439447508305}, {x: '2024-01-06', y: 1403.4833193418085}, {x: '2024-01-09', y: 1400.6622306264292}, {x: '2024-01-11', y: 1403.882547438634}, {x: '2024-01-13', y: 1402.2889877584314}, {x: '2024-01-15', y: 1399.3723635903991}, {x: '2024-01-17', y: 1397.480932804766}, {x: '2024-01-19', y: 1397.480932804766}, {x: '2024-01-22', y: 1404.9711543067465}, {x: '2024-01-24', y: 1408.1606102998394}, {x: '2024-01-26', y: 1408.1606102998394}, {x: '2024-01-27', y: 1403.8121044860495}, {x: '2024-02-06', y: 1406.05279339158}, {x: '2024-02-08', y: 1406.05279339158}, {x: '2024-02-10', y: 1405.5502382583818}, {x: '2024-02-14', y: 1403.0063000065948}, {x: '2024-02-15', y: 1399.3409606049936}, {x: '2024-02-17', y: 1401.9365619773191}, {x: '2024-02-20', y: 1399.994891071644}, {x: '2024-02-22', y: 1396.626009644974}, {x: '2024-02-24', y: 1394.964647753132}, {x: '2024-02-27', y: 1393.0413840983194}, {x: '2024-02-29', y: 1389.5777775098718}, {x: '2024-03-02', y: 1384.9494483821034}, {x: '2024-03-04', y: 1382.845022689217}, {x: '2024-03-05', y: 1389.1008403173776}, {x: '2024-03-07', y: 1384.403919832391}, {x: '2024-03-09', y: 1386.8499882286212}, {x: '2024-03-12', y: 1385.6949345470537}, {x: '2024-03-14', y: 1383.2593573354457}, {x: '2024-03-16', y: 1380.739220534351}, {x: '2024-03-21', y: 1371.6434015898162}, {x: '2024-03-23', y: 1368.9639189013462}, {x: '2024-03-24', y: 1368.9639189013462}, {x: '2024-03-26', y: 1366.208590382665}, {x: '2024-03-28', y: 1364.558329245743}, {x: '2024-03-30', y: 1373.4805212134331}, {x: '2024-04-01', y: 1370.0795316912158}, {x: '2024-04-02', y: 1370.0795316912158}, {x: '2024-04-04', y: 1368.4480005323287}, {x: '2024-04-06', y: 1371.6671466928703}, {x: '2024-04-09', y: 1365.6988139723182}, {x: '2024-04-11', y: 1371.457717342057}, {x: '2024-04-13', y: 1367.6720280060074}, {x: '2024-04-16', y: 1365.4750193490097}, {x: '2024-04-21', y: 1362.930360325431}, {x: '2024-04-23', y: 1362.930360325431}, {x: '2024-04-25', y: 1362.930360325431}, {x: '2024-04-27', y: 1362.930360325431}, {x: '2024-04-29', y: 1362.930360325431}, {x: '2024-05-06', y: 1362.930360325431}, {x: '2024-05-08', y: 1362.930360325431}, {x: '2024-05-10', y: 1362.930360325431}, {x: '2024-05-12', y: 1362.930360325431}, {x: '2024-05-14', y: 1362.930360325431}, {x: '2024-05-17', y: 1362.930360325431}, {x: '2024-05-22', y: 1362.930360325431}, {x: '2024-05-24', y: 1362.930360325431}, {x: '2024-05-26', y: 1362.930360325431}, {x: '2024-05-28', y: 1362.930360325431}, {x: '2024-05-30', y: 1362.930360325431}, {x: '2024-06-01', y: 1362.930360325431}, {x: '2024-06-08', y: 1362.930360325431}, {x: '2024-06-10', y: 1362.930360325431}],
                borderColor: 'gray',
                fill: '+1',
                pointRadius: 0,
                borderWidth: 1 // Adjust as needed
            },
            {
                label: 'Max',
                data: [{x: '2023-10-14', y: 1573.1145356765671}, {x: '2023-10-16', y: 1573.1145356765671}, {x: '2023-10-19', y: 1579.6078435330344}, {x: '2023-10-21', y: 1582.3185724194468}, {x: '2023-10-24', y: 1586.5187478873129}, {x: '2023-10-28', y: 1580.9822141439151}, {x: '2023-10-30', y: 1574.7318443578088}, {x: '2023-11-02', y: 1577.9400838009683}, {x: '2023-11-04', y: 1572.0190026519558}, {x: '2023-11-06', y: 1572.0190026519558}, {x: '2023-11-08', y: 1574.608225035515}, {x: '2023-11-10', y: 1570.8114184636552}, {x: '2023-11-12', y: 1562.8394521334708}, {x: '2023-11-14', y: 1567.0965368780596}, {x: '2023-11-16', y: 1570.5998045195497}, {x: '2023-11-17', y: 1570.5998045195497}, {x: '2023-11-20', y: 1572.7165036342424}, {x: '2023-11-22', y: 1576.0886593624937}, {x: '2023-11-24', y: 1578.329318289248}, {x: '2023-11-27', y: 1584.098874432398}, {x: '2023-11-28', y: 1584.098874432398}, {x: '2023-11-30', y: 1581.15247912534}, {x: '2023-12-02', y: 1578.0894648310152}, {x: '2023-12-06', y: 1574.815541945317}, {x: '2023-12-08', y: 1569.6267545513497}, {x: '2023-12-10', y: 1562.782671256339}, {x: '2023-12-12', y: 1564.3817270249915}, {x: '2023-12-14', y: 1567.367765859865}, {x: '2023-12-16', y: 1562.4131408659798}, {x: '2023-12-18', y: 1564.939398991434}, {x: '2023-12-21', y: 1564.0843729432786}, {x: '2023-12-23', y: 1566.8323847480274}, {x: '2023-12-27', y: 1564.0966901102377}, {x: '2023-12-29', y: 1566.5536160892354}, {x: '2023-12-30', y: 1567.044690130504}, {x: '2024-01-02', y: 1569.7132271077653}, {x: '2024-01-04', y: 1572.2043254871442}, {x: '2024-01-06', y: 1565.8689661788476}, {x: '2024-01-09', y: 1570.0255069047062}, {x: '2024-01-11', y: 1571.711765873138}, {x: '2024-01-13', y: 1575.155768260886}, {x: '2024-01-15', y: 1572.0482725436}, {x: '2024-01-17', y: 1575.8077181915182}, {x: '2024-01-19', y: 1571.6343423560108}, {x: '2024-01-22', y: 1575.9105742257798}, {x: '2024-01-24', y: 1578.9961786362512}, {x: '2024-01-26', y: 1582.3017162814915}, {x: '2024-01-27', y: 1582.3017162814915}, {x: '2024-02-06', y: 1575.4701401621237}, {x: '2024-02-08', y: 1571.217125580815}, {x: '2024-02-10', y: 1567.958326302683}, {x: '2024-02-14', y: 1572.6311236845138}, {x: '2024-02-15', y: 1577.096861305026}, {x: '2024-02-17', y: 1583.9496307792117}, {x: '2024-02-20', y: 1585.2270793746688}, {x: '2024-02-22', y: 1583.0288510072005}, {x: '2024-02-24', y: 1584.4139901831666}, {x: '2024-02-27', y: 1585.7405503202606}, {x: '2024-02-29', y: 1586.780808646069}, {x: '2024-03-02', y: 1591.5013810958585}, {x: '2024-03-04', y: 1595.596500884628}, {x: '2024-03-05', y: 1598.4959195277142}, {x: '2024-03-07', y: 1594.7289907624272}, {x: '2024-03-09', y: 1598.0468452941464}, {x: '2024-03-12', y: 1600.4754503268423}, {x: '2024-03-14', y: 1595.554309546796}, {x: '2024-03-16', y: 1590.3421021208007}, {x: '2024-03-21', y: 1587.674376440522}, {x: '2024-03-23', y: 1590.1489757647437}, {x: '2024-03-24', y: 1591.4884892109249}, {x: '2024-03-26', y: 1587.3519217093096}, {x: '2024-03-28', y: 1584.4219884482818}, {x: '2024-03-30', y: 1587.6814346903532}, {x: '2024-04-01', y: 1583.8879590284926}, {x: '2024-04-02', y: 1583.8879590284926}, {x: '2024-04-04', y: 1585.7681563775018}, {x: '2024-04-06', y: 1581.006440830973}, {x: '2024-04-09', y: 1587.345940400775}, {x: '2024-04-11', y: 1587.345940400775}, {x: '2024-04-13', y: 1591.6357295419066}, {x: '2024-04-16', y: 1587.2988847176175}, {x: '2024-04-21', y: 1589.2233706487273}, {x: '2024-04-23', y: 1591.1053147189373}, {x: '2024-04-25', y: 1593.0953785131555}, {x: '2024-04-27', y: 1590.1918783638323}, {x: '2024-04-29', y: 1590.4874860161522}, {x: '2024-05-06', y: 1590.437957887153}, {x: '2024-05-08', y: 1591.2122738858825}, {x: '2024-05-10', y: 1593.1690599526426}, {x: '2024-05-12', y: 1595.6923995259424}, {x: '2024-05-14', y: 1593.1122376741223}, {x: '2024-05-17', y: 1594.8339255905485}, {x: '2024-05-22', y: 1600.2951001968856}, {x: '2024-05-24', y: 1598.1947636459497}, {x: '2024-05-26', y: 1595.1120129186654}, {x: '2024-05-28', y: 1596.9642239371208}, {x: '2024-05-30', y: 1599.7747592538162}, {x: '2024-06-01', y: 1601.5428733473775}, {x: '2024-06-08', y: 1604.798143114955}, {x: '2024-06-10', y: 1604.798143114955}],
                borderColor: 'gray',
                fill: false,
                pointRadius: 0,
                borderWidth: 1 // Adjust as needed
            }
        ]
        },
        options: {
            hover: {
                mode: null
            },
            animation: false,
            maintainAspectRatio: false, // Add this line
            scales: {
                y: {
                    min: 1300,
                    max: 1700,
                    ticks: {
                        color: 'black',
                        font: {
                            size: 20, // Adjust as needed
                            family:  "Kumbh Sans"
                        },
                        callback: function(value, index, values) {
                            // Display only every other tick
                            if (index % 2 === 0) return value;
                        }
                    }
                },
                x: {

                    type: 'time',
                        time: {
                            unit: 'month'
                        },
                        ticks: {
                            callback: function(value, index, values) {
                                const date = new Date(value);
                                const monthNames = ["January", "February", "March", "April", "May", "June",
                                    "July", "August", "September", "October", "November", "December"
                                ];
                                return monthNames[date.getMonth()];
                            },
                            color: 'black',
                        font: {
                            size: 20, // Adjust as needed
                            family:  "Kumbh Sans" // Adjust to match your body font
                        },
                        padding: 20,
                        }
                }
            },
            plugins: {
                tooltip: {
                    enabled: false
                },
                legend: {
                    display: false
                },
                annotation: {
                    annotations: {
                        line2: {
                            type: 'line',
                            yMin: 1504.7,
                            yMax: 1504.7,
                            borderColor: 'black',
                            borderWidth: 1,
                            label: {
                                content: 'NHL Avg',
                                enabled: true,
                                position: 'center',
                                xAdjust: 70,
                                backgroundColor: 'rgba(255, 255, 255, 0)', // Add this line
                                color: 'black', // Add this line
                                font: {
                                    size: 13, // Adjust as needed
                                    family: "Kumbh Sans", // Adjust to match your body font
                                }
                            }
                        }
                    }
                }
            }
        }
    });
}