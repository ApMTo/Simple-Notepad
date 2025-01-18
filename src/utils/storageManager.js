export const createCategory = (name) => {
  const description = {
    id: `category-${name}`,
    name,
    advice: "Click on the plus sign to create a post",
    posts: [],
  };

  const categories = JSON.parse(
    localStorage.getItem("categories-names") || "[]"
  );

  categories.push(`category-${name}`);

  localStorage.setItem("categories-names", JSON.stringify(categories));

  localStorage.setItem(`category-${name}`, JSON.stringify(description));

  return description;
};

export const getAllCategories = () => {
  const categories = JSON.parse(
    localStorage.getItem("categories-names") || "[]"
  );

  if (categories.length < 1) return;
  const data = [];
  categories.forEach((element) => {
    let category = JSON.parse(localStorage.getItem(element));

    data.push(category);
  });
  return data;
};

export const addTextLocal = (id, obj) => {
  const categories = JSON.parse(localStorage.getItem(id));
  categories.posts.push(obj);
  localStorage.setItem(id, JSON.stringify(categories));
};

export const deletePostLocal = (categoryId, postId) => {
    const categoryData = JSON.parse(localStorage.getItem(categoryId));
  
    if (categoryData && Array.isArray(categoryData.posts)) {
      categoryData.posts = categoryData.posts.filter((post) => post.id !== postId);
  
      localStorage.setItem(categoryId, JSON.stringify(categoryData));
    } else {
      console.error(`Category with ID ${categoryId} not found or posts are invalid.`);
    }
  };
  