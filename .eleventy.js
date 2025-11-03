
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  
  // Liquid shortcode to render an item card: title, image, url, excerpt
  eleventyConfig.addLiquidShortcode("itemCard", function(title, img, url, excerpt) {
    return `
      <article class="card">
        <a class="card-link" href="${url}">
          <img src="${img}" alt="${title}">
          <div class="card-body">
            <h3>${title}</h3>
            <p class="excerpt">${excerpt}</p>
            <span class="btn">Read more</span>
          </div>
        </a>
      </article>
    `;
  });
};