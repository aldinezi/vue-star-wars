import icons from './icons.json';

export default{
  getIconById: (id) => {
    let iconCode = '';
    switch (id) {
      case 1:
        iconCode = icons.luke;
        break;
      case 13:
        iconCode = icons.chewbacca;
        break;
      case 14:
        iconCode = icons.hansolo;
        break;
      default:
        iconCode = icons.default;
        break;
    }
    return iconCode;
  },
};
