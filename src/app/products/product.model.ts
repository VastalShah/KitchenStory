
export class ProductModel{
    constructor(p_id: any, p_img: any, p_name: string, p_desc: string, p_price: number){
        this.p_id = p_id;
        this.p_img = p_img;
        this.p_name = p_name;
        this.p_desc = p_desc;
        this.p_price = p_price;
     }

    p_id: any;
    p_img: any;
    p_name!: string;
    p_desc!: string;
    p_price!: number;
}