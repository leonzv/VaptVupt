import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    fontFamily: "bariol_regular",
  },
  mapContainer: {
    position: "absolute",
    flex: 1,
    minWidth: "100%",
    minHeight: "100%",
  },
  containerCadastro: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "space-between",
  },
  containerLoad: {
    justifyContent: "center",
    backgroundColor: "#fff",
    flex: 1,
  },
  textCircle: {
    textAlign: "center",
    fontSize: 14,
    marginTop: 55,
    marginLeft: 15,
    fontFamily: "bariol_regular",
  },
  circle: {
    borderRadius: 50,
    backgroundColor: "white",
    height: 60,
    width: 60,
    borderWidth: 2,
    borderColor: "#00298F",
    marginLeft: 35,
    marginTop: 35,
    justifyContent: "center",
  },
  circle2: {
    borderRadius: 50,
    backgroundColor: "#000",
    height: 48,
    width: 48,
    alignSelf: "center",
  },
  circleCorrida: {
    borderRadius: 200,
    backgroundColor: "#00298F",
    height: 140,
    width: 140,
    borderWidth: 2,
    borderColor: "white",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  circle2Corrida: {
    borderRadius: 200,
    backgroundColor: "#000",
    height: 120,
    width: 120,
    alignSelf: "center",
  },
  circleDraw: {
    borderRadius: 50,
    backgroundColor: "#00298F",
    height: 60,
    width: 60,
    borderWidth: 2,
    borderColor: "white",
    marginLeft: 35,
    marginTop: 35,
    justifyContent: "center",
  },
  circleFav: {
    borderRadius: 50,
    backgroundColor: "#00298F",
    height: 60,
    width: 60,
    borderWidth: 2,
    borderColor: "white",
    marginTop: 15,
    marginRight: 15,
    marginBottom: 15,
    justifyContent: "center",
  },
  bigCircle: {
    borderRadius: 100,
    backgroundColor: "white",
    height: 200,
    width: 200,
    borderWidth: 2,
    borderColor: "#00298F",
    marginTop: 30,
    justifyContent: "center",
  },
  bigCircle2: {
    borderRadius: 100,
    backgroundColor: "#000",
    height: 185,
    width: 185,
    alignSelf: "center",
  },
  vaiVexImg: {
    resizeMode: "contain",
    alignSelf: "center",
    marginVertical: 40,
  },
  vaiVexImgCadastro: {
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 15,
    marginBottom: 10,
  },
  firstImg: {
    resizeMode: "contain",
    alignSelf: "flex-start",
    bottom: 15,
  },
  retanguloAzul: {
    backgroundColor: "#00298F",
    width: "65%",
    height: 400,
    borderRadius: 10,
    marginLeft: 30,
    flexDirection: "column-reverse",
  },
  retanguloAzul1: {
    backgroundColor: "#00298F",
    width: "65%",
    height: 310,
    borderRadius: 10,
    marginLeft: 30,
    flexDirection: "column-reverse",
  },
  retanguloVermelho1: {
    backgroundColor: "#ED1C24",
    width: "65%",
    height: 310,
    borderRadius: 10,
    marginLeft: 30,
    flexDirection: "column-reverse",
  },
  loginText: {
    textAlign: "left",
    fontSize: 18,
    fontFamily: "bariol_regular",
    color: "#fff",
    marginLeft: 20,
    marginBottom: 25,
    width: 150,
  },
  btnCadastrar: {
    backgroundColor: "#fff",
    padding: 15,
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 30,
    alignItems: "center",
    marginBottom: 20,
  },
  btnCadastrarFont: {
    fontSize: 18,
    color: "#000",
    fontFamily: "bariol_regular",
  },
  wrapper: {},
  retanguloVermelho: {
    backgroundColor: "#ED1C24",
    width: "65%",
    height: 400,
    borderRadius: 10,
    marginLeft: 30,
    flexDirection: "column-reverse",
  },
  textBox: {
    backgroundColor: "#fff",
    borderColor: "#656565",
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 30,
    marginBottom: 10,
    flexDirection: "row",
  },
  messageBox: {
    backgroundColor: "#fff",
    borderColor: "#000",
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 30,
    marginBottom: 10,
    flexDirection: "row",
  },
  textBox1: {
    backgroundColor: "#fff",
    borderColor: "#656565",
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 30,
    marginBottom: 60,
    flexDirection: "row",
  },
  textBox2: {
    backgroundColor: "#fff",
    borderColor: "#656565",
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 30,
    bottom: 40,
    flexDirection: "row",
  },
  textBox30: {
    backgroundColor: "#fff",
    height: 45,
    borderColor: "#656565",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    width: "21%",
    marginLeft: "7.5%",
    flexDirection: "row",
  },
  textBox70: {
    backgroundColor: "#fff",
    height: 45,
    borderColor: "#656565",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    marginRight: "7.5%",
    marginLeft: "4%",
    width: "60%",
    flexDirection: "row",
  },
  box3070: {
    flexDirection: "row",
  },
  textBoxFont: {
    fontSize: 16,
    textAlign: "left",
    marginLeft: 10,
    color: "#656565",
    minWidth: "90%",
    maxWidth: "90%",
    maxHeight: 100,
    fontFamily: "bariol_regular",
  },
  textBoxFontChamar: {
    fontSize: 14,
    textAlign: "left",
    marginLeft: 10,
    color: "#656565",
    minWidth: "50%",
    maxWidth: "50%",
    maxHeight: 100,
    fontFamily: "bariol_regular",
  },
  textBoxDraw: {
    fontSize: 14,
    textAlign: "left",
    marginHorizontal: 20,
    color: "white",
    minWidth: "90%",
    maxWidth: "90%",
    maxHeight: 100,
    fontFamily: "bariol_regular",
  },
  textBoxDesc: {
    fontSize: 14,
    textAlign: "left",
    marginLeft: 10,
    color: "#656565",
    minWidth: "95%",
    maxWidth: "95%",
    fontFamily: "bariol_regular",
  },
  textBoxFontCadastro: {
    fontSize: 16,
    textAlign: "left",
    marginLeft: 10,
    top: 14,
    maxHeight: 50,
    color: "#656565",
    fontFamily: "bariol_regular",
  },
  btnComecar: {
    backgroundColor: "#00298F",
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 30,
    alignItems: "center",
    marginVertical: 20,
  },
  btnComecarFont: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "bariol_regular",
  },
  redCircle: {
    backgroundColor: "#ED1C24",
    borderRadius: 300,
    width: 240,
    height: 240,
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
    right: 50,
    bottom: 20,
    alignItems: "center",
    alignContent: "center",
  },
  blueCircle: {
    backgroundColor: "#00298F",
    borderRadius: 300,
    width: 240,
    height: 240,
    alignSelf: "center",
    position: "absolute",
    right: 50,
    justifyContent: "center",
    marginTop: 70,
    alignItems: "center",
    alignContent: "center",
  },
  porcentagemLoad: {
    fontSize: 72,
    color: "#fff",
    fontFamily: "bariol_regular",
  },
  textLoad: {
    fontSize: 24,
    marginHorizontal: 35,
    top: 200,
    marginTop: 35,
    textAlign: "center",
    color: "#000",
    fontFamily: "bariol_regular",
  },
  btnReady: {
    backgroundColor: "#00298F",
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 30,
    alignItems: "center",
    top: 200,
    marginTop: 45,
  },
  retanguloAzulHome: {
    backgroundColor: "#00298F",
    width: "85%",
    height: 230,
    borderRadius: 10,
    marginLeft: 30,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  retanguloAzulPag: {
    backgroundColor: "#00298F",
    width: "80%",
    minHeight: 200,
    borderRadius: 7,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    flex: 1,
  },
  textRetanguloHome: {
    fontSize: 26,
    color: "#fff",
    textAlign: "center",
    fontFamily: "bariol_regular",
  },
  imgHome: {
    resizeMode: "contain",
    alignSelf: "center",
  },
  grayBox: {
    backgroundColor: "#DCDCDC",
    width: "85%",
    height: 100,
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  grayBoxBigText: {
    fontSize: 50,
    color: "#000",
    marginLeft: 25,
    fontFamily: "bariol_regular",
  },
  grayBoxSmallText: {
    color: "#000",
    fontSize: 14,
    marginLeft: 25,
    maxWidth: 80,
    fontFamily: "bariol_regular",
  },
  btnAdmin: {
    backgroundColor: "#346CFF",
    borderRadius: 5,
    alignItems: "center",
    width: "32%",
    height: 29,
    alignSelf: "center",
    marginHorizontal: 10,
    justifyContent: "center",
  },
  btnAdminFont: {
    fontSize: 14,
    color: "#fff",
    alignSelf: "center",
    elevation: 5,
    textAlign: "center",
    fontFamily: "bariol_regular",
  },
  procurarBox: {
    width: "90%",
    height: 80,
    backgroundColor: "#00298F",
    marginHorizontal: 15,
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  procurarContainer: {
    width: "100%",
    height: "225%",
    justifyContent: "flex-end",
  },
  procurarBox2: {
    width: "90%",
    height: 100,
    backgroundColor: "#00298F",
    marginHorizontal: 15,
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
  },
  circleProcurar: {
    borderRadius: 50,
    backgroundColor: "#00298F",
    height: 54,
    width: 54,
    borderWidth: 2,
    borderColor: "#fff",
    justifyContent: "center",
    marginLeft: 20,
  },
  circle2Procurar: {
    borderRadius: 50,
    backgroundColor: "#000",
    height: 40,
    width: 40,
    alignSelf: "center",
  },
  whiteLineHorizontal: {
    backgroundColor: "#fff",
    width: "92%",
    height: 1,
    alignSelf: "center",
  },
  whiteLineVertical: {
    backgroundColor: "#fff",
    width: 1,
    height: "96%",
    alignSelf: "center",
  },
  blackLineHorizontal: {
    backgroundColor: "#111",
    width: "85%",
    height: 1,
    alignSelf: "center",
    marginVertical: 20,
  },
  nameText: {
    fontSize: 14,
    color: "white",
    alignSelf: "center",
    maxWidth: 50,
    marginHorizontal: 10,
    fontFamily: "bariol_regular",
  },
  procurarFont: {
    fontSize: 14,
    color: "white",
    textAlign: "left",
    marginLeft: 10,
    marginVertical: 10,
    fontFamily: "bariol_regular",
  },
  horarioFont: {
    fontSize: 22,
    color: "white",
    textAlign: "center",
    marginLeft: 12,
    marginTop: 5,
    fontFamily: "bariol_regular",
  },
  horarioFont1: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
    marginLeft: 12,
    fontFamily: "bariol_regular",
  },
  circleText: {
    color: "white",
    alignSelf: "center",
    fontSize: 26,
    textAlign: "center",
    fontFamily: "bariol_regular",
  },
  textBoxChamar: {
    backgroundColor: "#fff",
    borderColor: "#656565",
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 30,
    marginVertical: 10,
    flexDirection: "row",
  },
  textBoxGuardar: {
    backgroundColor: "#ECECEC",
    minHeight: 50,
    maxHeight: 50,
    borderRadius: 5,
    marginHorizontal: 30,
    marginVertical: 10,
    flexDirection: "row",
  },
  blueBtn: {
    backgroundColor: "#346CFF",
    width: 135,
    height: 50,
    marginLeft: 30,
    marginRight: 30,
    alignSelf: "center",
    borderRadius: 5,
    marginVertical: 25,
    justifyContent: "center",
  },
  greenMessageBtn: {
    backgroundColor: "#00AA33",
    width: "85%",
    height: 50,
    marginHorizontal: 15,
    alignSelf: "center",
    borderRadius: 5,
    justifyContent: "center",
    marginBottom: 20,
  },
  greenBtn: {
    backgroundColor: "#00AA33",
    width: "85%",
    height: 60,
    marginHorizontal: 15,
    alignSelf: "center",
    borderRadius: 5,
    justifyContent: "center",
    marginBottom: 40,
  },
  motoboyText: {
    fontSize: 20,
    color: "#fff",
    alignSelf: "center",
    elevation: 5,
    textAlign: "center",
    fontFamily: "bariol_regular",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.65)",
  },
  modalView: {
    backgroundColor: "#00298F",
    borderRadius: 5,
    width: "85%",
    height: "65%",
    elevation: 10,
  },
  centeredView1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.65)",
  },
  modalView1: {
    backgroundColor: "#00298F",
    borderRadius: 5,
    width: "85%",
    height: "55%",
    elevation: 10,
  },
  buttonLeft: {
    width: 135,
    height: 50,
    borderRadius: 5,
    marginLeft: 30,
    marginTop: 15,
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  buttonRight: {
    width: 135,
    height: 50,
    marginRight: 30,
    marginTop: 15,
    borderRadius: 5,
    justifyContent: "center",
    alignSelf: "flex-end",
  },
  buttonOpen: {
    backgroundColor: "#346CFF",
  },
  buttonClose: {
    backgroundColor: "white",
    borderRadius: 3,
    width: 45,
    height: 30,
    margin: 10,
  },
  buttonCloseChamar: {
    backgroundColor: "white",
    borderRadius: 3,
    alignSelf: "center",
    width: 45,
    height: 30,
    margin: 10,
  },
  textStyle: {
    color: "white",
    fontFamily: "bariol_regular",
    textAlign: "center",
    fontSize: 16,
  },
  textStyleClose: {
    color: "#00298F",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "bariol_regular",
  },
  modalText: {
    marginTop: 30,
    textAlign: "center",
    color: "white",
    fontFamily: "bariol_regular",
  },
  enderecoStyle: {
    textAlign: "center",
    fontSize: 22,
    color: "white",
    fontFamily: "bariol_regular",
    marginHorizontal: 11,
  },
  dotStyle: {
    backgroundColor: "rgba(0,0,0,.2)",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  textPagamento: {
    fontSize: 14,
    color: "black",
    marginTop: 85,
    marginRight: 30,
    fontFamily: "bariol_regular",
    flex: 1,
  },
  greenPag: {
    width: "85%",
    minHeight: 50,
    maxHeight: 60,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#00AA33",
    marginBottom: 30,
    borderRadius: 7,
    flex: 1,
  },
  grayBoxConc: {
    width: "90%",
    height: 120,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#DCDCDC",
    borderRadius: 8,
    flexDirection: "row",
    marginVertical: 20,
  },
  textSettings: {
    fontSize: 14,
    textAlign: "left",
    marginLeft: 30,
    marginTop: 50,
    fontFamily: "bariol_regular",
  },
  switchBtn: {
    alignSelf: "flex-start",
    marginLeft: 30,
    marginTop: 15,
    marginBottom: 20,
  },
  textBoxFontContato: {
    fontSize: 14,
    textAlign: "left",
    marginLeft: 20,
    top: 13,
    color: "#656565",
    fontFamily: "bariol_regular",
  },
  textBoxContato: {
    backgroundColor: "#fff",
    borderColor: "#656565",
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 30,
    marginTop: 20,
    flexDirection: "row",
  },
  textBoxContatoDesc: {
    backgroundColor: "#fff",
    borderColor: "#656565",
    height: 150,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 30,
    marginTop: 20,
  },
  blueBtnEnviar: {
    backgroundColor: "#346CFF",
    height: 40,
    width: "85%",
    marginHorizontal: 30,
    marginTop: 15,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 6,
  },
  textSobre: {
    fontSize: 14,
    marginLeft: 30,
    fontFamily: "bariol_regular",
  },
  bigCircleCond: {
    borderRadius: 100,
    backgroundColor: "white",
    height: 150,
    width: 150,
    borderWidth: 2,
    borderColor: "#00298F",
    marginTop: 30,
    justifyContent: "center",
    marginLeft: 30,
  },
  bigCircleCond2: {
    borderRadius: 100,
    backgroundColor: "#000",
    height: 135,
    width: 135,
    alignSelf: "center",
  },
  redBox: {
    width: "38%",
    height: 35,
    alignSelf: "flex-end",
    marginRight: 15,
    backgroundColor: "#346CFF",
    borderRadius: 6,
    justifyContent: "center",
  },
  blueBox: {
    width: "38%",
    height: 35,
    marginLeft: 15,
    alignSelf: "flex-start",
    backgroundColor: "#ED1C24",
    borderRadius: 6,
    justifyContent: "center",
  },
  textCondutorBtn: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
    fontFamily: "bariol_regular",
  },
  grayBoxDados: {
    minWidth: "85%",
    marginHorizontal: 30,
    minHeight: 200,
    alignSelf: "center",
    backgroundColor: "#DCDCDC",
    borderRadius: 8,
    justifyContent: "center",
  },
  blueBoxDados: {
    width: 25,
    height: 70,
    backgroundColor: "#346CFF",
    alignSelf: "flex-start",
    marginLeft: 30,
  },
  editarDadosBtn: {
    backgroundColor: "#346CFF",
    width: 140,
    height: 35,
    borderRadius: 6,
    alignSelf: "flex-start",
    justifyContent: "center",
    marginLeft: 30,
    marginVertical: 15,
  },
  editarDadosBtnText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "bariol_regular",
  },
  textDashboard: {
    fontSize: 18,
    marginLeft: 30,
    textAlign: "left",
    marginTop: 2,
    fontFamily: "bariol_regular",
  },
  enderecosBtn: {
    backgroundColor: "#346CFF",
    width: 210,
    height: 35,
    borderRadius: 6,
    alignSelf: "flex-start",
    justifyContent: "center",
    marginLeft: 30,
    marginVertical: 25,
  },
  atualizarDados: {
    width: "38%",
    height: 50,
    backgroundColor: "#00AA33",
    marginRight: 30,
    marginLeft: 15,
    borderRadius: 7,
    justifyContent: "center",
  },
  deletarDados: {
    width: "38%",
    height: 50,
    backgroundColor: "#ED1C24",
    marginLeft: 30,
    marginRight: 15,
    borderRadius: 7,
    justifyContent: "center",
  },
  enderecoBox: {
    maxWidth: "85%",
    height: 85,
    borderBottomColor: "#707070",
    borderBottomWidth: 1,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    marginHorizontal: 30,
  },
  enderecoText: {
    maxWidth: "60%",
    fontSize: 16,
    color: "#8F8F8F",
    fontFamily: "bariol_regular",
    textAlign: "left",
  },
  enderecoListBtn: {
    backgroundColor: "#346CFF",
    width: 90,
    height: 35,
    borderRadius: 6,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  enderecoListText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "bariol_regular",
  },
  boxMessageRight: {
    maxWidth: "85%",
    maxHeight: 250,
    backgroundColor: "#AFAFAF",
    opacity: 0.8,
    alignSelf: "flex-end",
    justifyContent: "center",
    borderRadius: 50,
    marginRight: 30,
    marginTop: 20,
    alignItems: "center",
  },
  boxMessageLeft: {
    maxWidth: "85%",
    maxHeight: 250,
    backgroundColor: "#346CFF",
    opacity: 0.8,
    alignSelf: "flex-start",
    justifyContent: "center",
    borderRadius: 50,
    marginLeft: 30,
    marginTop: 20,
    alignItems: "center",
  },
  textMessage: {
    color: "white",
    fontSize: 16,
    fontFamily: "bariol_regular",
    margin: 15,
  },
  enviarBtn: {
    backgroundColor: "#346CFF",
    width: 100,
    height: 40,
    borderRadius: 6,
    alignSelf: "flex-end",
    marginRight: 30,
    marginBottom: 30,
    justifyContent: "center",
  },
  drawerContent: {
    flex: 1,
    backgroundColor: "#00298F",
  },
  textDrawer: {
    color: "white",
    fontSize: 26,
    fontFamily: "bariol_regular",
  },
  drawerBox: {
    backgroundColor: "rgba(255,255,255,0.25)",
    alignSelf: "center",
    width: "85%",
    height: 45,
    justifyContent: "center",
    marginHorizontal: 20,
    marginTop: 35,
    borderRadius: 5,
  },
  maisText: {
    marginLeft: 30,
    color: "black",
    opacity: 0.6,
    fontFamily: "bariol_regular",
    fontSize: 18,
  },
  maisFav: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
  button: {
    width: "60%",
    height: 40,
    backgroundColor: "#346CFF",
    justifyContent: "center",
    marginLeft: 30,
    marginTop: 30,
    borderRadius: 5,
  },
  modalFavText: {
    color: "white",
    fontSize: 14,
    fontFamily: "bariol_regular",
    textAlign: "justify",
    alignSelf: "flex-start",
    maxWidth: 80,
  },
  btnModalFav: {
    backgroundColor: "#FFAA00",
    width: 100,
    height: 30,
    alignSelf: "flex-end",
    justifyContent: "center",
    borderRadius: 5,
  },
  btnModalText: {
    color: "white",
    fontSize: 14,
    fontFamily: "bariol_regular",
    textAlign: "center",
  },
  fecharBtn: {
    backgroundColor: "white",
    width: "35%",
    height: 30,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  fecharText: {
    color: "#00298F",
    fontFamily: "bariol_regular",
    textAlign: "center",
    fontSize: 14,
  },
  conclusaoText: {
    fontFamily: "bariol_regular",
    textAlign: "center",
    fontSize: 16,
  },
  escolherView: {
    justifyContent: "center",
    flex: 1,
  },
  corridaText: {
    textAlign: "center",
    fontFamily: "bariol_regular",
    fontSize: 20,
    color: "white",
  },
  acompanharText: {
    color: "#00298F",
    fontFamily: "bariol_regular",
    textAlign: "center",
    fontSize: 16,
  },
  acompanharBtn: {
    backgroundColor: "white",
    width: 180,
    height: 30,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  aceitarText: {
    color: "white",
    fontSize: 26,
    textAlign: "center",
    fontFamily: "bariol_regular",
    marginLeft: 10,
  },
  greenCircle: {
    backgroundColor: "#00AA33",
    width: 50,
    height: 50,
    borderRadius: 200,
    marginLeft: 10,
    marginRight: 10,
  },
  LocationBox:{
    backgroundColor: '#fff',
    elevation: 1,
    borderWidth: 1,
    borderRadius: 3,
    flexDirection: 'row',
  },
  LocationText:{
    margin: 10,
    fontSize: 18,
    color: '#333',
  },
  LocationTimeBox:{
    backgroundColor: '#222',
    padding: 5,
  },
  LocationTimeText:{
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  LocationTimeTextSmall:{
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  Back:{
    position: 'absolute',
    top: 40,
    left: 20,
  },
  TypeContainer:{
  backgroundColor: '#fff',
  height: 300,
  width: '100%',
  position: 'absolute',
  bottom: 0,
  elevation: 3,
  borderWidth:1,
  borderColor: '#fff',
  alignItems: 'center',
  padding: 20,
},

TypeTitle:{
  fontSize: 20,
  color: '#222',
},

TypeDescription:{
  color: '#666',
  fontSize: 14,
},
TypeImage:{
  height: 80,
  margin: 10,
},

RequestButton:{
  backgroundColor: '#222',
  justifyContent: 'center',
  alignItems: 'center',
  height: 44,
  alignSelf: 'stretch',
  marginTop: 10,
},

RequestButtonText:{
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 18,
},
});
