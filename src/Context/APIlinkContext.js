import {createContext} from "react";

const APIlinkContext = createContext({
    newest: null,
    allposts: null,
    detail: null
});
export default APIlinkContext;