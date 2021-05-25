export default {
  name: "src-componentes-formulario",
  components: {},
  props: [],
  data() {
    return {
      formData: this.getInicialData(),
      formState: {},
      nombreLengthMin: 5,
      nombreLengthMax: 15,
      edadMin: 18,
      edadMax: 120,
    };
  },
  computed: {},
  mounted() {},
  methods: {
    getInicialData() {
      return {
        nombre: "",
        apellido: "",
        edad: "",
        email: "",
      };
    },

    enviar() {
      //SPREAD Operator
      console.log({ ...this.formData });
      //Borro la información despues de enviarla
      this.formData = this.getInicialData();
      this.formState._reset();
    },
  },
};
