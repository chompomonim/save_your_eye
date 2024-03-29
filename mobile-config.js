App.info({
  id: 'com.meteor.save_your_eye',
  name: 'save your eye',
  description: 'Save your eyes',
  author: 'Vilnius Meteor hackathon',
  email: 'jaro@nous.lt',
  website: 'http://save_your_eye.meteor.com'
});

// App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');

App.launchScreens({
  'android_xhdpi_portrait': 'resources/splash-720x1280.png'
});

App.icons({
  'android_ldpi': 'resources/icon.png',
  'android_mdpi': 'resources/icon.png',
  'android_hdpi': 'resources/icon.png',
  'android_xhdpi': 'resources/icon.png'
});
