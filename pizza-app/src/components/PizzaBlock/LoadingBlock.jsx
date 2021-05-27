import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingBlock() {
    return (
        <ContentLoader 
        className="pizza-block"
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <circle cx="140" cy="140" r="140" /> 
        <rect x="0" y="291" rx="3" ry="6" width="280" height="30" /> 
        <rect x="1" y="329" rx="6" ry="6" width="280" height="84" /> 
        <rect x="3" y="424" rx="10" ry="10" width="80" height="31" /> 
        <rect x="116" y="421" rx="20" ry="20" width="162" height="37" />
      </ContentLoader>
    )
}

export default LoadingBlock;

