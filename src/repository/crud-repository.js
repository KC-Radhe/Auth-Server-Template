class crudRepository {
    constructor(model) {
        this.model = model;
    }
    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            throw error;
        }
    }
    async getBy(elem) {
        try {
            const response = await this.model.findOne(elem);
            return response;
        } catch (error) {
            throw error;
        }
    }
    async update(id, newData) {
        try {
            const response = await this.model.findByIdAndUpdate(id, newData, {new: true});
            return response;
        } catch (error) {
            throw error;
        }
    }
    async destroy(id) {
        try {
            const response = await this.model.findByIdAndDelete(id);
            return response;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = crudRepository;