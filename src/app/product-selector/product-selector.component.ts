import { Component } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-selector',
  templateUrl: './product-selector.component.html',
  styleUrls: ['./product-selector.component.scss']
})
export class ProductSelectorComponent {
  products: Product[] = [
    { code: '7501000624089', name: 'Arcoiris', stock: 4, purchase_price: 5.91, sale_price: 6.0, image: 'https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750100062408L.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF' },
    { code: '75003135', name: 'Boing Guayaba', stock: 4, purchase_price: 10.25, sale_price: 12.0, image: 'https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00000007500177L.jpg' },
    { code: '75003104', name: 'Boing Mango', stock: 4, purchase_price: 10.25, sale_price: 12.0, image: 'https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00000007500175L.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF' },
    { code: '75003159', name: 'Boing Manzana', stock: 3, purchase_price: 10.25, sale_price: 12.0, image: 'https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00000007500179L.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF' },
    { code: '7501011128323', name: 'Cheetos', stock: 5, purchase_price: 4.67, sale_price: 7.0, image: 'https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750101112832L.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF' },
    { code: '7500478023363', name: 'Cheetos Flamming Hot', stock: 3, purchase_price: 4.67, sale_price: 7.0, image: 'https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750047802336L.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF' },
    { code: '7500478008247', name: 'Chokis', stock: 4, purchase_price: 5.91, sale_price: 6.0, image: 'https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750047800824L.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF' },
    { code: '7501011132191', name: 'Churrumais', stock: 7, purchase_price: 4.67, sale_price: 7.0, image: 'https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750047800200L.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF' },
    { code: '7501011125704', name: 'Doritos', stock: 8, purchase_price: 4.67, sale_price: 7.0, image: 'https://m.media-amazon.com/images/I/71MhS674spL._AC_SX679_.jpg' },
    { code: '7500478012398', name: 'Emperador Sabor Chocolate', stock: 5, purchase_price: 5.91, sale_price: 5.0, image: 'https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750047801239L.jpg' },
    { code: '7500478012404', name: 'Emperador Sabor Vainilla', stock: 6, purchase_price: 5.91, sale_price: 5.0, image: 'https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750047801240L.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF' },
    { code: '7501031360130', name: 'Manzanita Sol', stock: 3, purchase_price: 8.25, sale_price: 10.0, image: 'https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750103136013L.jpg' },
    { code: '7501030419037', name: 'Mini Gansito', stock: 22, purchase_price: 5.29, sale_price: 6.0, image: 'https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750103041903L.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF' },
    { code: '7501000630363', name: 'Mini Mamut', stock: 16, purchase_price: 2.2, sale_price: 3.0, image: 'https://cdn.shopify.com/s/files/1/0372/4450/2149/products/farm1_9446eb12-17ff-4004-b79d-fc2fb98cc282_1200x1200.jpg?v=1596841679' },
    { code: '7501031346301', name: 'Mirinda', stock: 1, purchase_price: 8.25, sale_price: 10.0, image: 'https://despensaurbana.mx/content/images/thumbs/5f0e5fe51721854af7ff0c7b_Refresco_Mirinda_Lata_355_Ml_24_Pz_KYGMAU4OEH.jpg.png' },
    { code: '040697741541', name: 'Muffins', stock: 20, purchase_price: 5.6, sale_price: 5.0, image: 'https://img.freepik.com/fotos-premium/cupcake-chispas-chocolate-sobre-fondo-blanco_319172-1105.jpg?w=2000' },
    { code: '75000011', name: 'Nesquik', stock: 11, purchase_price: 9.76, sale_price: 10.0, image: 'https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00000007500001L.jpg' },
    { code: '7501031311309', name: 'Pepsi', stock: 2, purchase_price: 8.25, sale_price: 10.0, image: 'https://despensaurbana.mx/content/images/thumbs/5f0e5fe51721854af7ff0c75_refresco-pepsi-regular-lata-355-ml.png' },
    { code: '7501011125322', name: 'Rancheritos', stock: 8, purchase_price: 4.67, sale_price: 7.0, image: 'https://images.albertsons-media.com/is/image/ABS/960544064-ECOM?$ng-ecom-pdp-desktop$&defaultImage=Not_Available' },
    { code: '7500478015610', name: 'Ruffles', stock: 6, purchase_price: 4.67, sale_price: 7.0, image: 'https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750047801561L1.jpg' },
    { code: '7501011101005', name: 'Sabritas', stock: 2, purchase_price: 4.67, sale_price: 7.0, image: 'https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750101110100L.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF' },
    { code: '7501071120091', name: 'Squirt', stock: 3, purchase_price: 8.25, sale_price: 10.0, image: 'https://www.pidefacilraul.com/cms/wp-content/uploads/2020/05/09-192.jpg' },
  ];

  selectedProducts: Product[] = [];

  getTotal(): number {
    return this.selectedProducts.reduce((total, product) => total + (product.sale_price * (product.quantity || 1)), 0);
  }
  

  selectProduct(product: Product): void {
    if (product.stock === 0) {
      alert('Este producto no tiene stock disponible.');
      return;
    }
  
    if (!product.selected) {
      product.selected = true;
      product.quantity = 1;
    } else {
      product.quantity! += 1;
    }
  
    product.stock -= 1;
    if (!this.selectedProducts.includes(product)) {
      this.selectedProducts.push(product);
    }
  }
  

  removeProduct(index: number): void {
    this.selectedProducts[index].selected = false;
    this.selectedProducts.splice(index, 1);
  }

  addProduct(product: Product): void {
    if (product.stock === 0) {
      alert('Este producto no tiene stock disponible.');
      return;
    }
  
    product.stock -= 1;
    product.quantity! += 1;
  }
  
  subtractProduct(product: Product, index: number): void {
    if (product.quantity! > 1) {
      product.stock += 1;
      product.quantity! -= 1;
    } else {
      this.removeProduct(index);
    }
  }
  

  
}
