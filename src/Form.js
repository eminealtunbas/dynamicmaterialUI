import CreateForm from "./CreateForm";
const Form = () => {
  const Obj = [
    {
      componentType: "Typography",
      variant:"subtitle1" ,
      color:"textSecondary",
      text:"Aşağıdaki Formu Doldurun!",
      sm: "12",
      align:"left"
    },
    {
      componentType: "TextField",
      size: "medium",
      xs: "12",
      sm: "6",
      md: "6",
      lg: "6",
      label: "Name",
      multiLine: false,
      fullWidth: true,
      placeholder:"Plase enter your first name!",
    },
    {
      componentType: "TextField",
      size: "medium",
      xs: "12",
      sm: "6",
      md: "6",
      lg: "6",
      label: "Soyad",
      multiLine: false,
      fullWidth: true,
      placeholder:"Lütfen Soyadınızı Giriniz!",
    },
    {
      componentType: "TextField",
      size: "medium",
      xs: "12",
      sm: "6",
      md: "6",
      lg: "6",
      label: "Mail",
      multiLine: false,
      fullWidth: true,
      placeholder:"name@example.com",
    },
    {
      componentType: "TextField",
      size: "medium",
      xs: "12",
      sm: "6",
      md: "6",
      lg: "6",
      label: "Telefon",
      multiLine: false,
      fullWidth: true,
      type:"number",
      placeholder:"Lütfen Telefon Numaranızı Giriniz!",
      
    },
    {
      componentType: "RadioGroup",
      xs: "12",
      sm: "6",
      md: "",
      lg: "",
      color: "primary",
      size: "large",
      text: "Cinsiyet",
      label: "cinsiyet",
      align:"left",
      options: [
        {
          value: "kadin",
          label: "Kadın"
        },
        {
          value: "erkek",
          label: "Erkek"
        }
      ]

    },
    {
      componentType: "TextField",
      size: "medium",
      xs: "12",
      sm: "6",
      md: "6",
      lg: "6",
      label: "Şifre",
      multiLine: false,
      fullWidth: true,
      type:"password",
      inputProps:{ maxLength: 12,minLength:6,placeholder:"Lütfen Şifrenizi Giriniz!", },
    },
    {
      componentType: "Select",
      align:"left",      
      label: "Ülke",
      fullWidth: true,
      reference: [
        {
          text: "Türkiye",
          value: 1,
        },
        {
          text: "Almanya",
          value: 2,
        },
        {
          text: "Hollanda",
          value: 3,
        },
        {
          text: "İngiltere",
          value: 4,
        },
      ],
      xs: "12",
      sm: "6",
    },
  ];
  return (
    <>
      <CreateForm Obj={Obj} />
    </>
  );
};

export default Form;