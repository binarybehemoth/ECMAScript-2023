function convertToSlug(Text) {
  return Text.toLowerCase()
             .replace(/ /g, '-')
             .replace(/[^\w-]+/g, '');
}
console.log(convertToSlug('Happy Birthday, Mike!'));
    // happy-birthday-mike
