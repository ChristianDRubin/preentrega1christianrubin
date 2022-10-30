import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div className="col-md-4">
      <div className="bbb_deals">
        <div className="ribbon ribbon-top-right">
          <span><small className="cross">x </small>{product.stock}</span>
        </div>
        <div className="bbb_deals_title">
          Nuestros Vehiculos
        </div>
        <div className="bbb_deals_slider_container">
          <div className=" bbb_deals_item">
            <div className="bbb_deals_image">
              <img src={product.pictureUrl} alt="img" />
            </div>
            <div className="bbb_deals_content">
              <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                <div className="bbb_deals_item_category">
                  {product.category}
                </div>
                <div className="bbb_deals_item_price_a ml-auto">
                  <strike>$ {product.price - 1000}</strike>
                </div>
              </div>
              <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                <div className="bbb_deals_item_name">
                  {product.title}
                </div>
                <div className="bbb_deals_item_price ml-auto">
                     $  {product.price}
                </div>
              </div>
              <div className="available">
                <div className="available_line d-flex flex-row justify-content-start">
                  <div className="available_title">
                    Stock: <span>{product.stock}</span>
                  </div>
                  <div className="sold_stars ml-auto">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
                <div className="available_bar"><span></span></div>
                <div className="product-button-group">
                  <Link className="product-button btn-wishlist" href="/" data-abc="true">
                    <i className="fa fa-heart-o"></i>
                    <span>Favoritos</span>
                  </Link>
                  <Link className="product-button" to={`item/${product.id}`} data-abc="true">
                    <i className="fa fa-angle-right"></i>
                    <span>Detalle</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;