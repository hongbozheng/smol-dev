// src/services/index.ts

import { Model } from '../models/index';

class Service {
    private model: Model;

    constructor() {
        this.model = new Model();
    }

    // Add your service methods here
}

export default Service;