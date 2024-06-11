window.onload = function() {
    var ctx = document.getElementById('myChart');
    ctx.height = 600; // Set the height as needed
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                data: [{x: '2023-10-14', y: 1521.505838420705}, {x: '2023-10-17', y: 1527.7888617059386}, {x: '2023-10-19', y: 1522.9344749504771}, {x: '2023-10-21', y: 1519.8657139276563}, {x: '2023-10-24', y: 1516.093663206348}, {x: '2023-10-26', y: 1511.094967768246}, {x: '2023-10-29', y: 1514.9334426112662}, {x: '2023-11-02', y: 1512.1387937582597}, {x: '2023-11-04', y: 1506.5383270464104}, {x: '2023-11-06', y: 1502.622287920496}, {x: '2023-11-09', y: 1500.012085798873}, {x: '2023-11-11', y: 1504.8199478875454}, {x: '2023-11-13', y: 1508.5280290212013}, {x: '2023-11-15', y: 1510.1481120654212}, {x: '2023-11-18', y: 1507.2287723130032}, {x: '2023-11-20', y: 1504.5032959844375}, {x: '2023-11-22', y: 1501.149118027134}, {x: '2023-11-24', y: 1508.175686611597}, {x: '2023-11-26', y: 1512.3675641855498}, {x: '2023-11-28', y: 1514.5380532490922}, {x: '2023-11-30', y: 1519.0610347305294}, {x: '2023-12-06', y: 1524.1719501106172}, {x: '2023-12-08', y: 1526.1143263349225}, {x: '2023-12-10', y: 1529.284337308696}, {x: '2023-12-12', y: 1532.0012101577809}, {x: '2023-12-14', y: 1526.4907712343731}, {x: '2023-12-16', y: 1520.6859984676232}, {x: '2023-12-19', y: 1517.2198020537444}, {x: '2023-12-21', y: 1521.9018937705591}, {x: '2023-12-22', y: 1525.0656401638437}, {x: '2023-12-28', y: 1529.6727271783725}, {x: '2023-12-30', y: 1532.590506718216}, {x: '2023-12-31', y: 1537.5982856282546}, {x: '2024-01-02', y: 1540.7735641027314}, {x: '2024-01-06', y: 1543.1868491603054}, {x: '2024-01-09', y: 1545.0531347271387}, {x: '2024-01-11', y: 1547.3575656666076}, {x: '2024-01-13', y: 1549.3521377965506}, {x: '2024-01-16', y: 1552.307954834007}, {x: '2024-01-18', y: 1554.636548743255}, {x: '2024-01-20', y: 1558.6872637731874}, {x: '2024-01-23', y: 1561.029518789109}, {x: '2024-01-25', y: 1563.0676034981518}, {x: '2024-01-27', y: 1566.1826909118909}, {x: '2024-02-06', y: 1562.5993686120771}, {x: '2024-02-09', y: 1565.4879591314384}, {x: '2024-02-10', y: 1560.2003270563534}, {x: '2024-02-13', y: 1563.569807737004}, {x: '2024-02-15', y: 1559.0966929541062}, {x: '2024-02-17', y: 1561.8543720133464}, {x: '2024-02-19', y: 1565.6024669809392}, {x: '2024-02-21', y: 1562.640869919255}, {x: '2024-02-23', y: 1557.537332661866}, {x: '2024-02-24', y: 1551.4585587379656}, {x: '2024-02-26', y: 1554.2397060580229}, {x: '2024-02-28', y: 1555.958600342787}, {x: '2024-03-02', y: 1558.150394144771}, {x: '2024-03-03', y: 1562.1565627715663}, {x: '2024-03-05', y: 1564.864711906538}, {x: '2024-03-07', y: 1560.159094637659}, {x: '2024-03-09', y: 1557.5112164507918}, {x: '2024-03-10', y: 1562.636313494595}, {x: '2024-03-13', y: 1566.2153656651385}, {x: '2024-03-16', y: 1563.5247410042994}, {x: '2024-03-19', y: 1564.6630589267484}, {x: '2024-03-21', y: 1568.204075505903}, {x: '2024-03-23', y: 1564.1377065049696}, {x: '2024-03-24', y: 1559.6330807383597}, {x: '2024-03-26', y: 1562.364502758737}, {x: '2024-03-28', y: 1565.7660477109284}, {x: '2024-03-30', y: 1568.0905852210497}, {x: '2024-04-01', y: 1565.6599565527483}, {x: '2024-04-03', y: 1560.8888349199892}, {x: '2024-04-05', y: 1565.650550466518}, {x: '2024-04-06', y: 1569.1834951342364}, {x: '2024-04-10', y: 1572.817459392236}, {x: '2024-04-12', y: 1569.026403615749}, {x: '2024-04-13', y: 1564.2049427761926}, {x: '2024-04-15', y: 1566.4019514331906}, {x: '2024-04-17', y: 1560.8777134630766}, {x: '2024-04-18', y: 1556.647666471681}, {x: '2024-04-22', y: 1559.8146021645962}, {x: '2024-04-24', y: 1556.4971557816275}, {x: '2024-04-26', y: 1562.6229168447007}, {x: '2024-04-28', y: 1565.117726667864}, {x: '2024-05-01', y: 1566.631657455145}, {x: '2024-05-08', y: 1564.5364491522555}, {x: '2024-05-10', y: 1567.3266504080382}, {x: '2024-05-12', y: 1564.1906234409769}, {x: '2024-05-14', y: 1565.9979120170576}, {x: '2024-05-16', y: 1563.9149319852515}, {x: '2024-05-18', y: 1567.8143475203865}, {x: '2024-05-20', y: 1570.536004095397}, {x: '2024-05-23', y: 1573.5492559913682}, {x: '2024-05-25', y: 1570.5368331886984}, {x: '2024-05-27', y: 1566.0394385074403}, {x: '2024-05-29', y: 1570.0233793646207}, {x: '2024-05-31', y: 1574.7888054948214}, {x: '2024-06-02', y: 1576.7061151848648}, {x: '2024-06-08', y: 1573.450845417287}, {x: '2024-06-10', y: 1570.303217005131}],
                borderColor: '#3935DA',
                fill: false,
                pointRadius: 0,
                borderWidth: 2 // Adjust as needed
            },
            {
                label: 'Min',
                data: [{x: '2023-10-14', y: 1455.3831182419888}, {x: '2023-10-17', y: 1455.3831182419888}, {x: '2023-10-19', y: 1452.659948939231}, {x: '2023-10-21', y: 1449.1220419021545}, {x: '2023-10-24', y: 1446.87056852046}, {x: '2023-10-26', y: 1443.5182136519763}, {x: '2023-10-29', y: 1438.4355316085198}, {x: '2023-11-02', y: 1432.4227289413968}, {x: '2023-11-04', y: 1426.5125570078048}, {x: '2023-11-06', y: 1426.5125570078048}, {x: '2023-11-09', y: 1431.3878590386428}, {x: '2023-11-11', y: 1428.4253399295633}, {x: '2023-11-13', y: 1425.1814604689946}, {x: '2023-11-15', y: 1422.2182884018691}, {x: '2023-11-18', y: 1428.6068214051284}, {x: '2023-11-20', y: 1426.571077880094}, {x: '2023-11-22', y: 1422.0673791819768}, {x: '2023-11-24', y: 1419.470536406789}, {x: '2023-11-26', y: 1422.465215802711}, {x: '2023-11-28', y: 1425.2335956694112}, {x: '2023-11-30', y: 1422.9504781688645}, {x: '2023-12-06', y: 1431.4087832541493}, {x: '2023-12-08', y: 1434.7726345461049}, {x: '2023-12-10', y: 1433.5130035561965}, {x: '2023-12-12', y: 1436.2982159694657}, {x: '2023-12-14', y: 1435.5593150652985}, {x: '2023-12-16', y: 1434.5190976337649}, {x: '2023-12-19', y: 1428.1976560163328}, {x: '2023-12-21', y: 1423.5455548191892}, {x: '2023-12-22', y: 1423.5455548191892}, {x: '2023-12-28', y: 1414.0166668147829}, {x: '2023-12-30', y: 1414.0166668147829}, {x: '2023-12-31', y: 1412.371249961787}, {x: '2024-01-02', y: 1408.6886265533803}, {x: '2024-01-06', y: 1403.4833193418085}, {x: '2024-01-09', y: 1400.6622306264292}, {x: '2024-01-11', y: 1403.882547438634}, {x: '2024-01-13', y: 1402.2889877584314}, {x: '2024-01-16', y: 1397.480932804766}, {x: '2024-01-18', y: 1397.480932804766}, {x: '2024-01-20', y: 1401.1542151272208}, {x: '2024-01-23', y: 1408.1606102998394}, {x: '2024-01-25', y: 1408.1606102998394}, {x: '2024-01-27', y: 1403.8121044860495}, {x: '2024-02-06', y: 1406.05279339158}, {x: '2024-02-09', y: 1405.5502382583818}, {x: '2024-02-10', y: 1405.5502382583818}, {x: '2024-02-13', y: 1403.0063000065948}, {x: '2024-02-15', y: 1399.3409606049936}, {x: '2024-02-17', y: 1401.9365619773191}, {x: '2024-02-19', y: 1399.994891071644}, {x: '2024-02-21', y: 1396.626009644974}, {x: '2024-02-23', y: 1394.964647753132}, {x: '2024-02-24', y: 1394.964647753132}, {x: '2024-02-26', y: 1393.0413840983194}, {x: '2024-02-28', y: 1393.0413840983194}, {x: '2024-03-02', y: 1384.9494483821034}, {x: '2024-03-03', y: 1384.9494483821034}, {x: '2024-03-05', y: 1389.1008403173776}, {x: '2024-03-07', y: 1384.403919832391}, {x: '2024-03-09', y: 1386.8499882286212}, {x: '2024-03-10', y: 1387.040728952505}, {x: '2024-03-13', y: 1385.6949345470537}, {x: '2024-03-16', y: 1380.739220534351}, {x: '2024-03-19', y: 1374.5141585474014}, {x: '2024-03-21', y: 1371.6434015898162}, {x: '2024-03-23', y: 1368.9639189013462}, {x: '2024-03-24', y: 1368.9639189013462}, {x: '2024-03-26', y: 1366.208590382665}, {x: '2024-03-28', y: 1364.558329245743}, {x: '2024-03-30', y: 1373.4805212134331}, {x: '2024-04-01', y: 1370.0795316912158}, {x: '2024-04-03', y: 1370.0795316912158}, {x: '2024-04-05', y: 1368.4480005323287}, {x: '2024-04-06', y: 1371.6671466928703}, {x: '2024-04-10', y: 1365.6988139723182}, {x: '2024-04-12', y: 1371.457717342057}, {x: '2024-04-13', y: 1367.6720280060074}, {x: '2024-04-15', y: 1365.4750193490097}, {x: '2024-04-17', y: 1365.4750193490097}, {x: '2024-04-18', y: 1362.930360325431}, {x: '2024-04-22', y: 1362.930360325431}, {x: '2024-04-24', y: 1362.930360325431}, {x: '2024-04-26', y: 1362.930360325431}, {x: '2024-04-28', y: 1362.930360325431}, {x: '2024-05-01', y: 1362.930360325431}, {x: '2024-05-08', y: 1362.930360325431}, {x: '2024-05-10', y: 1362.930360325431}, {x: '2024-05-12', y: 1362.930360325431}, {x: '2024-05-14', y: 1362.930360325431}, {x: '2024-05-16', y: 1362.930360325431}, {x: '2024-05-18', y: 1362.930360325431}, {x: '2024-05-20', y: 1362.930360325431}, {x: '2024-05-23', y: 1362.930360325431}, {x: '2024-05-25', y: 1362.930360325431}, {x: '2024-05-27', y: 1362.930360325431}, {x: '2024-05-29', y: 1362.930360325431}, {x: '2024-05-31', y: 1362.930360325431}, {x: '2024-06-02', y: 1362.930360325431}, {x: '2024-06-08', y: 1362.930360325431}, {x: '2024-06-10', y: 1362.930360325431}],
                borderColor: 'gray',
                fill: '+1',
                pointRadius: 0,
                borderWidth: 1 // Adjust as needed
            },
            {
                label: 'Max',
                data: [{x: '2023-10-14', y: 1576.797550245593}, {x: '2023-10-17', y: 1576.797550245593}, {x: '2023-10-19', y: 1579.6078435330344}, {x: '2023-10-21', y: 1582.3185724194468}, {x: '2023-10-24', y: 1586.5187478873129}, {x: '2023-10-26', y: 1580.9822141439151}, {x: '2023-10-29', y: 1574.7318443578088}, {x: '2023-11-02', y: 1577.9400838009683}, {x: '2023-11-04', y: 1572.0190026519558}, {x: '2023-11-06', y: 1572.0190026519558}, {x: '2023-11-09', y: 1570.8114184636552}, {x: '2023-11-11', y: 1562.8394521334708}, {x: '2023-11-13', y: 1567.0965368780596}, {x: '2023-11-15', y: 1570.5998045195497}, {x: '2023-11-18', y: 1575.390408374609}, {x: '2023-11-20', y: 1572.7165036342424}, {x: '2023-11-22', y: 1576.0886593624937}, {x: '2023-11-24', y: 1578.329318289248}, {x: '2023-11-26', y: 1580.779656627037}, {x: '2023-11-28', y: 1584.098874432398}, {x: '2023-11-30', y: 1581.15247912534}, {x: '2023-12-06', y: 1574.815541945317}, {x: '2023-12-08', y: 1569.6267545513497}, {x: '2023-12-10', y: 1562.782671256339}, {x: '2023-12-12', y: 1564.3817270249915}, {x: '2023-12-14', y: 1567.367765859865}, {x: '2023-12-16', y: 1562.4131408659798}, {x: '2023-12-19', y: 1561.8471437101816}, {x: '2023-12-21', y: 1564.0843729432786}, {x: '2023-12-22', y: 1564.0843729432786}, {x: '2023-12-28', y: 1564.0966901102377}, {x: '2023-12-30', y: 1567.044690130504}, {x: '2023-12-31', y: 1568.1990329422313}, {x: '2024-01-02', y: 1569.7132271077653}, {x: '2024-01-06', y: 1565.8689661788476}, {x: '2024-01-09', y: 1570.0255069047062}, {x: '2024-01-11', y: 1571.711765873138}, {x: '2024-01-13', y: 1575.155768260886}, {x: '2024-01-16', y: 1575.8077181915182}, {x: '2024-01-18', y: 1571.6343423560108}, {x: '2024-01-20', y: 1575.9105742257798}, {x: '2024-01-23', y: 1575.9105742257798}, {x: '2024-01-25', y: 1578.9961786362512}, {x: '2024-01-27', y: 1582.3017162814915}, {x: '2024-02-06', y: 1575.4701401621237}, {x: '2024-02-09', y: 1571.217125580815}, {x: '2024-02-10', y: 1567.958326302683}, {x: '2024-02-13', y: 1570.8525347990835}, {x: '2024-02-15', y: 1577.096861305026}, {x: '2024-02-17', y: 1583.9496307792117}, {x: '2024-02-19', y: 1583.9496307792117}, {x: '2024-02-21', y: 1585.2270793746688}, {x: '2024-02-23', y: 1583.0288510072005}, {x: '2024-02-24', y: 1584.4139901831666}, {x: '2024-02-26', y: 1584.4139901831666}, {x: '2024-02-28', y: 1585.7405503202606}, {x: '2024-03-02', y: 1591.5013810958585}, {x: '2024-03-03', y: 1591.5013810958585}, {x: '2024-03-05', y: 1598.4959195277142}, {x: '2024-03-07', y: 1594.7289907624272}, {x: '2024-03-09', y: 1598.0468452941464}, {x: '2024-03-10', y: 1598.0468452941464}, {x: '2024-03-13', y: 1600.4754503268423}, {x: '2024-03-16', y: 1590.3421021208007}, {x: '2024-03-19', y: 1590.3421021208007}, {x: '2024-03-21', y: 1587.674376440522}, {x: '2024-03-23', y: 1590.1489757647437}, {x: '2024-03-24', y: 1591.4884892109249}, {x: '2024-03-26', y: 1587.3519217093096}, {x: '2024-03-28', y: 1584.4219884482818}, {x: '2024-03-30', y: 1587.6814346903532}, {x: '2024-04-01', y: 1583.8879590284926}, {x: '2024-04-03', y: 1583.8879590284926}, {x: '2024-04-05', y: 1581.006440830973}, {x: '2024-04-06', y: 1581.006440830973}, {x: '2024-04-10', y: 1587.345940400775}, {x: '2024-04-12', y: 1591.6357295419066}, {x: '2024-04-13', y: 1591.6357295419066}, {x: '2024-04-15', y: 1593.7563011587822}, {x: '2024-04-17', y: 1587.2988847176175}, {x: '2024-04-18', y: 1587.2988847176175}, {x: '2024-04-22', y: 1591.1053147189373}, {x: '2024-04-24', y: 1591.1053147189373}, {x: '2024-04-26', y: 1593.0953785131555}, {x: '2024-04-28', y: 1590.1918783638323}, {x: '2024-05-01', y: 1592.4504225358996}, {x: '2024-05-08', y: 1591.2122738858825}, {x: '2024-05-10', y: 1593.1690599526426}, {x: '2024-05-12', y: 1595.6923995259424}, {x: '2024-05-14', y: 1593.1122376741223}, {x: '2024-05-16', y: 1592.2925509475767}, {x: '2024-05-18', y: 1594.8339255905485}, {x: '2024-05-20', y: 1594.8339255905485}, {x: '2024-05-23', y: 1600.2951001968856}, {x: '2024-05-25', y: 1598.1947636459497}, {x: '2024-05-27', y: 1595.1120129186654}, {x: '2024-05-29', y: 1596.9642239371208}, {x: '2024-05-31', y: 1599.7747592538162}, {x: '2024-06-02', y: 1601.5428733473775}, {x: '2024-06-08', y: 1604.798143114955}, {x: '2024-06-10', y: 1607.9457715271112}],
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