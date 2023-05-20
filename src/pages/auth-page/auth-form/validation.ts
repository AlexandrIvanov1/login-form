export const loginValidation = {
    required: 'This field is required',
    validate: (value: string) => {
        if (value.match(/[а-яА-Я]/)) {
            return 'This field cannot contain Russian letters';
        }

    }
};

export const passwordValidation = {
    required: 'This field is required',
    validate: (value: string) => {
        if (value.length < 4) {
            return 'Min length is 4'
        }
    }
}