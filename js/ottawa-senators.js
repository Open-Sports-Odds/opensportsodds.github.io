window.onload = function() {
    var ctx = document.getElementById('myChart');
    ctx.height = 600; // Set the height as needed
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                data: [{x: '2023-10-14', y: 1482.7071108170408}, {x: '2023-10-15', y: 1487.5898864641404}, {x: '2023-10-18', y: 1492.8245322132104}, {x: '2023-10-21', y: 1487.1565476275875}, {x: '2023-10-24', y: 1482.4625433543183}, {x: '2023-10-26', y: 1480.580012913391}, {x: '2023-10-28', y: 1486.6679974946055}, {x: '2023-11-02', y: 1484.064658057836}, {x: '2023-11-04', y: 1480.3415975447483}, {x: '2023-11-08', y: 1486.6211945370237}, {x: '2023-11-09', y: 1482.0152252397818}, {x: '2023-11-11', y: 1486.2778214498155}, {x: '2023-11-16', y: 1488.6009159088733}, {x: '2023-11-18', y: 1491.1844553900685}, {x: '2023-11-24', y: 1486.7292344429952}, {x: '2023-11-27', y: 1481.1382317392247}, {x: '2023-12-01', y: 1477.6833577931225}, {x: '2023-12-02', y: 1480.5562483545}, {x: '2023-12-05', y: 1486.3547245069756}, {x: '2023-12-07', y: 1483.922420604124}, {x: '2023-12-09', y: 1490.1493479183391}, {x: '2023-12-12', y: 1485.3927005395365}, {x: '2023-12-14', y: 1482.479494355624}, {x: '2023-12-15', y: 1480.762378597754}, {x: '2023-12-17', y: 1477.7607044481315}, {x: '2023-12-19', y: 1475.7116277796908}, {x: '2023-12-21', y: 1473.474398546594}, {x: '2023-12-23', y: 1475.8613092387282}, {x: '2023-12-27', y: 1481.1474609878392}, {x: '2023-12-29', y: 1474.8720763641074}, {x: '2023-12-31', y: 1479.126767930078}, {x: '2024-01-02', y: 1476.1464473210078}, {x: '2024-01-04', y: 1472.0600134438946}, {x: '2024-01-06', y: 1469.6467283863203}, {x: '2024-01-09', y: 1466.3715852137566}, {x: '2024-01-11', y: 1463.243510056191}, {x: '2024-01-13', y: 1464.8370697363937}, {x: '2024-01-16', y: 1461.0776240884754}, {x: '2024-01-18', y: 1465.216383405177}, {x: '2024-01-20', y: 1463.132407928214}, {x: '2024-01-21', y: 1468.0137113915066}, {x: '2024-01-23', y: 1472.995640748671}, {x: '2024-01-25', y: 1470.8972289878766}, {x: '2024-01-27', y: 1465.596373372137}, {x: '2024-01-29', y: 1467.9313707965928}, {x: '2024-01-31', y: 1471.0063868639445}, {x: '2024-02-10', y: 1475.0112491671282}, {x: '2024-02-13', y: 1478.3868822852787}, {x: '2024-02-15', y: 1471.422512365374}, {x: '2024-02-17', y: 1468.8269109930486}, {x: '2024-02-19', y: 1474.293903527303}, {x: '2024-02-20', y: 1473.0164549318456}, {x: '2024-02-22', y: 1477.9452966746612}, {x: '2024-02-24', y: 1480.3256674454703}, {x: '2024-02-26', y: 1476.6007143286986}, {x: '2024-02-27', y: 1473.2495294995065}, {x: '2024-03-01', y: 1468.344208624238}, {x: '2024-03-02', y: 1465.364364203607}, {x: '2024-03-06', y: 1463.074561274629}, {x: '2024-03-07', y: 1461.4562491212653}, {x: '2024-03-09', y: 1458.8194400011512}, {x: '2024-03-12', y: 1461.1494424503446}, {x: '2024-03-14', y: 1463.838362911456}, {x: '2024-03-16', y: 1466.9068709183127}, {x: '2024-03-17', y: 1462.3090820069335}, {x: '2024-03-19', y: 1459.2652424967907}, {x: '2024-03-21', y: 1454.7770604153218}, {x: '2024-03-23', y: 1460.5548575781424}, {x: '2024-03-24', y: 1465.0594833447524}, {x: '2024-03-27', y: 1471.700435696994}, {x: '2024-03-28', y: 1474.0502272980266}, {x: '2024-03-30', y: 1477.4285879312715}, {x: '2024-04-02', y: 1475.698730401404}, {x: '2024-04-04', y: 1470.5994674240271}, {x: '2024-04-06', y: 1467.8044656857942}, {x: '2024-04-07', y: 1470.8035412613135}, {x: '2024-04-09', y: 1468.7382281457596}, {x: '2024-04-11', y: 1472.331204095505}, {x: '2024-04-13', y: 1474.0961125351057}, {x: '2024-04-15', y: 1471.1739848994828}, {x: '2024-04-16', y: 1476.7417544953703}],
                borderColor: '#3935DA',
                fill: false,
                pointRadius: 0,
                borderWidth: 2 // Adjust as needed
            },
            {
                label: 'Min',
                data: [{x: '2023-10-14', y: 1458.7816769817323}, {x: '2023-10-15', y: 1458.7816769817323}, {x: '2023-10-18', y: 1455.3831182419888}, {x: '2023-10-21', y: 1449.1220419021545}, {x: '2023-10-24', y: 1446.87056852046}, {x: '2023-10-26', y: 1443.5182136519763}, {x: '2023-10-28', y: 1440.850702784126}, {x: '2023-11-02', y: 1432.4227289413968}, {x: '2023-11-04', y: 1426.5125570078048}, {x: '2023-11-08', y: 1428.7776569170198}, {x: '2023-11-09', y: 1431.3878590386428}, {x: '2023-11-11', y: 1428.4253399295633}, {x: '2023-11-16', y: 1428.6068214051284}, {x: '2023-11-18', y: 1428.6068214051284}, {x: '2023-11-24', y: 1419.470536406789}, {x: '2023-11-27', y: 1425.2335956694112}, {x: '2023-12-01', y: 1429.1388851146744}, {x: '2023-12-02', y: 1429.1388851146744}, {x: '2023-12-05', y: 1431.4087832541493}, {x: '2023-12-07', y: 1434.7726345461049}, {x: '2023-12-09', y: 1434.7726345461049}, {x: '2023-12-12', y: 1436.2982159694657}, {x: '2023-12-14', y: 1435.5593150652985}, {x: '2023-12-15', y: 1434.5190976337649}, {x: '2023-12-17', y: 1431.992839508311}, {x: '2023-12-19', y: 1428.1976560163328}, {x: '2023-12-21', y: 1423.5455548191892}, {x: '2023-12-23', y: 1421.262961340892}, {x: '2023-12-27', y: 1418.6237538293117}, {x: '2023-12-29', y: 1414.0166668147829}, {x: '2023-12-31', y: 1412.371249961787}, {x: '2024-01-02', y: 1408.6886265533803}, {x: '2024-01-04', y: 1406.9439447508305}, {x: '2024-01-06', y: 1403.4833193418085}, {x: '2024-01-09', y: 1400.6622306264292}, {x: '2024-01-11', y: 1403.882547438634}, {x: '2024-01-13', y: 1402.2889877584314}, {x: '2024-01-16', y: 1397.480932804766}, {x: '2024-01-18', y: 1397.480932804766}, {x: '2024-01-20', y: 1401.1542151272208}, {x: '2024-01-21', y: 1401.1542151272208}, {x: '2024-01-23', y: 1408.1606102998394}, {x: '2024-01-25', y: 1408.1606102998394}, {x: '2024-01-27', y: 1403.8121044860495}, {x: '2024-01-29', y: 1403.8121044860495}, {x: '2024-01-31', y: 1406.05279339158}, {x: '2024-02-10', y: 1405.5502382583818}, {x: '2024-02-13', y: 1403.0063000065948}, {x: '2024-02-15', y: 1399.3409606049936}, {x: '2024-02-17', y: 1401.9365619773191}, {x: '2024-02-19', y: 1399.994891071644}, {x: '2024-02-20', y: 1399.994891071644}, {x: '2024-02-22', y: 1396.626009644974}, {x: '2024-02-24', y: 1394.964647753132}, {x: '2024-02-26', y: 1393.0413840983194}, {x: '2024-02-27', y: 1393.0413840983194}, {x: '2024-03-01', y: 1389.5777775098718}, {x: '2024-03-02', y: 1384.9494483821034}, {x: '2024-03-06', y: 1389.1008403173776}, {x: '2024-03-07', y: 1384.403919832391}, {x: '2024-03-09', y: 1386.8499882286212}, {x: '2024-03-12', y: 1385.6949345470537}, {x: '2024-03-14', y: 1383.2593573354457}, {x: '2024-03-16', y: 1380.739220534351}, {x: '2024-03-17', y: 1377.04502132716}, {x: '2024-03-19', y: 1374.5141585474014}, {x: '2024-03-21', y: 1371.6434015898162}, {x: '2024-03-23', y: 1368.9639189013462}, {x: '2024-03-24', y: 1368.9639189013462}, {x: '2024-03-27', y: 1366.208590382665}, {x: '2024-03-28', y: 1364.558329245743}, {x: '2024-03-30', y: 1373.4805212134331}, {x: '2024-04-02', y: 1370.0795316912158}, {x: '2024-04-04', y: 1368.4480005323287}, {x: '2024-04-06', y: 1371.6671466928703}, {x: '2024-04-07', y: 1367.546665772972}, {x: '2024-04-09', y: 1365.6988139723182}, {x: '2024-04-11', y: 1371.457717342057}, {x: '2024-04-13', y: 1367.6720280060074}, {x: '2024-04-15', y: 1365.4750193490097}, {x: '2024-04-16', y: 1365.4750193490097}],
                borderColor: 'gray',
                fill: '+1',
                pointRadius: 0,
                borderWidth: 1 // Adjust as needed
            },
            {
                label: 'Max',
                data: [{x: '2023-10-14', y: 1573.1145356765671}, {x: '2023-10-15', y: 1573.1145356765671}, {x: '2023-10-18', y: 1576.797550245593}, {x: '2023-10-21', y: 1582.3185724194468}, {x: '2023-10-24', y: 1586.5187478873129}, {x: '2023-10-26', y: 1580.9822141439151}, {x: '2023-10-28', y: 1580.9822141439151}, {x: '2023-11-02', y: 1577.9400838009683}, {x: '2023-11-04', y: 1572.0190026519558}, {x: '2023-11-08', y: 1574.608225035515}, {x: '2023-11-09', y: 1570.8114184636552}, {x: '2023-11-11', y: 1562.8394521334708}, {x: '2023-11-16', y: 1570.5998045195497}, {x: '2023-11-18', y: 1575.390408374609}, {x: '2023-11-24', y: 1578.329318289248}, {x: '2023-11-27', y: 1584.098874432398}, {x: '2023-12-01', y: 1581.15247912534}, {x: '2023-12-02', y: 1578.0894648310152}, {x: '2023-12-05', y: 1574.815541945317}, {x: '2023-12-07', y: 1569.6267545513497}, {x: '2023-12-09', y: 1562.782671256339}, {x: '2023-12-12', y: 1564.3817270249915}, {x: '2023-12-14', y: 1567.367765859865}, {x: '2023-12-15', y: 1567.367765859865}, {x: '2023-12-17', y: 1564.939398991434}, {x: '2023-12-19', y: 1561.8471437101816}, {x: '2023-12-21', y: 1564.0843729432786}, {x: '2023-12-23', y: 1566.8323847480274}, {x: '2023-12-27', y: 1564.0966901102377}, {x: '2023-12-29', y: 1566.5536160892354}, {x: '2023-12-31', y: 1568.1990329422313}, {x: '2024-01-02', y: 1569.7132271077653}, {x: '2024-01-04', y: 1572.2043254871442}, {x: '2024-01-06', y: 1565.8689661788476}, {x: '2024-01-09', y: 1570.0255069047062}, {x: '2024-01-11', y: 1571.711765873138}, {x: '2024-01-13', y: 1575.155768260886}, {x: '2024-01-16', y: 1575.8077181915182}, {x: '2024-01-18', y: 1571.6343423560108}, {x: '2024-01-20', y: 1575.9105742257798}, {x: '2024-01-21', y: 1575.9105742257798}, {x: '2024-01-23', y: 1575.9105742257798}, {x: '2024-01-25', y: 1578.9961786362512}, {x: '2024-01-27', y: 1582.3017162814915}, {x: '2024-01-29', y: 1582.3017162814915}, {x: '2024-01-31', y: 1582.3017162814915}, {x: '2024-02-10', y: 1567.958326302683}, {x: '2024-02-13', y: 1570.8525347990835}, {x: '2024-02-15', y: 1577.096861305026}, {x: '2024-02-17', y: 1583.9496307792117}, {x: '2024-02-19', y: 1583.9496307792117}, {x: '2024-02-20', y: 1585.2270793746688}, {x: '2024-02-22', y: 1583.0288510072005}, {x: '2024-02-24', y: 1584.4139901831666}, {x: '2024-02-26', y: 1584.4139901831666}, {x: '2024-02-27', y: 1585.7405503202606}, {x: '2024-03-01', y: 1586.780808646069}, {x: '2024-03-02', y: 1591.5013810958585}, {x: '2024-03-06', y: 1598.4959195277142}, {x: '2024-03-07', y: 1594.7289907624272}, {x: '2024-03-09', y: 1598.0468452941464}, {x: '2024-03-12', y: 1600.4754503268423}, {x: '2024-03-14', y: 1595.554309546796}, {x: '2024-03-16', y: 1590.3421021208007}, {x: '2024-03-17', y: 1590.3421021208007}, {x: '2024-03-19', y: 1590.3421021208007}, {x: '2024-03-21', y: 1587.674376440522}, {x: '2024-03-23', y: 1590.1489757647437}, {x: '2024-03-24', y: 1591.4884892109249}, {x: '2024-03-27', y: 1587.3519217093096}, {x: '2024-03-28', y: 1584.4219884482818}, {x: '2024-03-30', y: 1587.6814346903532}, {x: '2024-04-02', y: 1583.8879590284926}, {x: '2024-04-04', y: 1585.7681563775018}, {x: '2024-04-06', y: 1581.006440830973}, {x: '2024-04-07', y: 1582.2852956901113}, {x: '2024-04-09', y: 1587.345940400775}, {x: '2024-04-11', y: 1587.345940400775}, {x: '2024-04-13', y: 1591.6357295419066}, {x: '2024-04-15', y: 1593.7563011587822}, {x: '2024-04-16', y: 1587.2988847176175}],
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