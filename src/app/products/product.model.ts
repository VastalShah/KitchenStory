
export class ProductModel{
    constructor(p_img: any, p_name: string, p_desc: string, p_price: number){
        this.p_img = p_img;
        this.p_name = p_name;
        this.p_desc = p_desc;
        this.p_price = p_price;
     }

    p_img: any;
    p_name!: string;
    p_desc!: string;
    p_price!: number;
}