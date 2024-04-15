import { createStore } from "@reduxjs/toolkit";

const {reducer} = require('./reducer')
const store = createStore(reducer)

export {store}

