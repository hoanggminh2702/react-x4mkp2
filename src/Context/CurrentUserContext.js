import React from "react";
import { createContext } from 'react';

const CurrentUserContext = createContext( {
    token: null
})

export default CurrentUserContext;