const simplyfyReview = (data: any[]) => {
  const simple = data.map((d) => {
    return {
      date: d.published_date,
      user: {
        name: d.user.username,
        img: d.user.avatar.original,
      },
      review: {
        url: d.url,
        rating: d.rating,
        title: d.title,
        desc: d.text,
        type: d.trip_type,
      },
    };
  });
  return simple;
};

export { simplyfyReview };
