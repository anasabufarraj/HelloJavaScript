// (c) Copyright 2018, Anas Abu Farraj.
// TypeScript Playground
// 29 Jul 2018

// trying out jQuery with TypeScript
jQuery(() => {
  // change the footer message at the bottom of the page
  jQuery('footer small').text('Ready to Manipulate!');

  // jQuery('#rect')
  //   // animate width to 200px on mouseover
  //   .on('mouseover', () => {
  //     jQuery('#rect').animate({ width: 200 }, 300);
  //   })
  //
  //   // animate width to 100px on mouseout
  //   .on('mouseout', () => {
  //     jQuery('#rect').animate({ width: 100, height: 100 }, 300);
  //   })
  //
  //   // increase height by 100px on click
  //   .on('click', () => {
  //     jQuery('#rect').animate({ height: '+=100' }, 'slow');
  //   });
});
