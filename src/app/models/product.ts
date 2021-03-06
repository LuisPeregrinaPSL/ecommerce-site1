export class Product {
    id: number;
    name: string;
    price: number;
    picture: string;
    category: string;

    constructor(id?: number, name?: string, price?: number, picture?: string, category?: string) {
        this.id = id ? id : -1;
        this.name = name ? name : 'product';
        this.price = price ? price : 0;
        this.picture = picture ? '/assets/products/' + picture + '.png' : '';
        this.category = category ? category : 'Other';
    }
}
