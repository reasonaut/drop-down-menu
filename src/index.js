import './style.css';
import { PubSub } from './pubSub';
import { DropDownMenu } from './dropDownMenu';
import { ImageSlider } from './imageSlider';

// test dropdown menu
// const content = document.getElementById('content');
// DropDownMenu.appendMenuAsChild(
//     content,
//     'testMenuLabel',
//     'testMenu',
//     ['item1', 'item2', 'item3', 'item4', 'item5'],
//     '200px'
// );

// test image slider
ImageSlider.buildHtml();
ImageSlider.arrangeImagesHorizontally();
