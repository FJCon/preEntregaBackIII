const ErrorMessages = {
    USER_NOT_FOUND: {
        status: 404,
        message: 'User not found.',
    },
    USER_ALREADY_EXISTS: {
        status: 400,
        message: 'User already exists.',
    },

    PET_NOT_FOUND: {
        status: 404,
        message: 'Pet not found.',
    },
    PET_ALREADY_EXISTS: {
        status: 400,
        message: 'Pet already exists.',
    },
    INVALID_INPUT: {
        status: 422,
        message: 'Invalid input.',
    },
    GENERATE_DATA_INVALID_INPUT:{
        status:400,
        message:'You must speficy both number of users and pets to be generated'
    }
};

export default ErrorMessages