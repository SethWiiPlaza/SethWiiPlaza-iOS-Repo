const { touchDown, touchMove, touchUp, usleep, appActivate, keyDown, keyUp } = at;

appActivate("com.waze.iphone");

const performTouchAction = (identifier, x, y, duration) => {
  touchDown(identifier, x, y);
  usleep(duration);
  touchUp(identifier, x, y);
};

performTouchAction(6, 1610.68, 576.87, 182625.33);
usleep(2983780.71);

performTouchAction(1, 757.23, 179.46, 108239.38);
usleep(2133326.08);

performTouchAction(3, 197.48, 407.43, 165814.29);
usleep(2292512.04);

performTouchAction(4, 1437.73, 445.42, 132249.54);
usleep(6100467.25);

performTouchAction(2, 1618.86, 462.88, 200112.17);
usleep(1641633.08);

performTouchAction(1, 791.00, 179.46, 165666.96);
usleep(1601129.17);

performTouchAction(3, 181.12, 408.45, 141040.42);
usleep(1875325.50);

performTouchAction(5, 1408.07, 376.62, 140967.54);
