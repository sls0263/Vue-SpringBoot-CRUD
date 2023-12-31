import { computed, ref } from 'vue';

const useForm = function() {
    const firstName= ref('');
    const lastName= ref('');
    const email= ref('');
    const dateOfBirth= ref(new Date());
    const company= ref('');
    const userName= ref('');
    const password= ref('');
    const twoFactor= ref(true);
    const showDialog= ref(false)
    const emailRegex= ref(new RegExp(/\S+@\S+\.\S+/))
    const allowSubmit= ref(false);   

     const validationMessage = computed(() => emailRegex.value.test(email) ? "" : "Please enter a valid email.");

     const onFormReset = () => {
         firstName.value = '';
         lastName.value = '';
         email.value = '';
         dateOfBirth.value = '';
         company.value = '';
         userName.value = '';
         password.value = '';
         twoFactor.value = '';
     };
     const toggleDialog = () => {
         showDialog.value = !showDialog.value;
     };
     const handleSubmit = () => {
         showDialog.value = !showDialog.value;
     };
     const onSubmit = () => {
         event.preventDefault();
         showDialog.value = true;
         setTimeout(() => { showDialog.value = false; }, 3000);
     };

     const dataItems = [
        {
            label: "Female",
            value: "female",
        },
        {
            label: "Male",
            value: "male",
        },
        {
            label: "Other",
            value: "other",
        },
    ];

     return {
        firstName,
        lastName,
        email,
        dateOfBirth,
        company,
        userName,
        password,
        twoFactor,
        showDialog,
        emailRegex,
        allowSubmit,
        validationMessage,
        dataItems,
        onFormReset,
        toggleDialog,
        handleSubmit,
        onSubmit
     };
};

export { useForm };