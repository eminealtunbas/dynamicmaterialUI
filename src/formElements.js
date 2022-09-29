export const inputFormElements=[
    {
        component:"TextField",
        name:"firstName",placeholder:"Enter first name", label:"First Name", 
        variant:"outlined", fullWidth:true,required:true, xs:12,sm:6
    },
    {   
        component:"TextField",
        name:"lastName",placeholder:"Enter last name", label:"Last Name", 
        variant:"outlined", fullWidth:true,required:true, xs:12,sm:6
    },
    {
        component:"TextField",
        name:"email",type:"email",placeholder:"Enter email", label:"Email", 
        variant:"outlined", fullWidth:true,required:true, xs:12,sm:6
    },
    {
        component:"TextField",
        name:"phone", type:"number",placeholder:"Enter phone number", label:"Phone", 
        variant:"outlined", fullWidth:true,required:true, xs:12,sm:6
    },
    {
        component:"TextField",
        name:"city",placeholder:"Enter city name", label:"City", 
        variant:"outlined", fullWidth:true,required:true, xs:12,sm:6
    }, {
        component:"TextField",
        name:"state",placeholder:"Enter state", label:"State", 
        variant:"outlined", fullWidth:true,required:true, xs:12,sm:6
    }, {
        type:"Select",
        name:"country",placeholder:"Enter country name", label:"Country", 
        variant:"outlined", fullWidth:true,required:true, xs:12,sm:6
    }, 
]