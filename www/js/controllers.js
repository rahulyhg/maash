angular.module('starter.controllers', ['ngCordova'])

.controller('AppCtrl', function($scope, $state, $ionicModal, $timeout, $ionicScrollDelegate, $ionicSideMenuDelegate) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.getCross = "";
  $scope.whenClose = function() {
    console.log("clickabe");
    if ($scope.getCross == "") {
      $scope.getCross = "m-cross";
    } else {
      $scope.getCross = "";
    }
  };
  $scope.closeAll = function(val) {
    $state.go(val);
    if ($ionicSideMenuDelegate.isOpenLeft()) {
      $ionicSideMenuDelegate.toggleLeft();
      // $scope.whenClose();
    }
    if ($ionicSideMenuDelegate.isOpenRight()) {
      $ionicSideMenuDelegate.toggleRight();
      $scope.whenClose();
    }
  };




  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $ionicScrollDelegate.scrollTop();
  });


  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
  // scroll class
  // $(document).ready(function() {
  //   $(window).scroll(function() {
  //     var scroll = $(window).scrollTop();
  //     console.log(scroll);
  //     if (scroll >= 40) {
  //       $(".bar-light").addClass("darkHeader");
  //     } else {
  //       $(".bar-light").removeClass("darkHeader");
  //     }
  //   });
  // });


})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [{
    title: 'Reggae',
    id: 1
  }, {
    title: 'Chill',
    id: 2
  }, {
    title: 'Dubstep',
    id: 3
  }, {
    title: 'Indie',
    id: 4
  }, {
    title: 'Rap',
    id: 5
  }, {
    title: 'Cowbell',
    id: 6
  }];
})

.controller('HomeCtrl', function($scope, $stateParams, MyServices, $ionicSlideBoxDelegate) {
  $scope.homeslider = [
    'img/banners/banner.jpg',
    'img/banners/banner.jpg',
    'img/banners/banner.jpg',
    'img/banners/banner.jpg'
  ];
  $scope.showSignUp = false;
  if ($.jStorage.get("user") || _.isEmpty($.jStorage.get("user"))) {
    $scope.showSignUp = true;
  } else {
    $scope.showSignUp = false;
  };
  MyServices.getSlider(function(data) {
    $scope.mySlides = data.data;
    var i = 1;
    _.each($scope.mySlides, function(n) {

      n.ordering = i;
      i++;
    });
    $ionicSlideBoxDelegate.update();
  });

})

.controller('ProfileCtrl', function($scope, $stateParams) {

})

.controller('BeverageCtrl', function($scope, $stateParams, MyServices) {
  $scope.foodBeveragesId = "57bc4b48eb9c91f1025a3b57";
  MyServices.getSingleExploreSmaaash($scope.foodBeveragesId, function(data) {
    $scope.drinkParty = data.data;
    console.log("  $scope.drinkParty", $scope.drinkParty);
  });

})

.controller('PartyCtrl', function($scope, $stateParams, MyServices) {
  $scope.hostpartyId = "57bc4b10eb9c91f1025a3b54";
  MyServices.getSingleExploreSmaaash($scope.hostpartyId, function(data) {
    $scope.SingleHostParty = data.data;
    // $scope.SingleHostParty = _.chunk(data.data, 3);
    // $scope.content = _.groupBy($scope.SingleHostParty, 'hostAPartyType');
    // $scope.birthday = $scope.content['57d6a09dbd5eb9846074b419'];
    // $scope.kittyparties = $scope.content['57e1429c3da62fae1dfc560c'];
    // $scope.wedding = $scope.content['57d6a027bd5eb9846074b418'];
    // $scope.corporate = $scope.content['57e142483da62fae1dfc55f2'];
  });
})

.controller('PartyFormCtrl', function($scope, $stateParams) {

})


.controller('EventsCtrl', function($scope, $stateParams) {
  $scope.items = [{
      title: 'live screening !',
      text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
    },

    //    {
    //       title: 'timing and pricing',
    //       text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
    //     },{
    //       title: 'technology',
    //       text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
    //     },{
    //       title: 'game description',
    //       text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
    //     },{
    //       title: 'promotions',
    //       text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
    //   },{
    //       title: 'photos',
    //       text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
    //   }
  ];
  $scope.toggleItem = function(item) {
    if ($scope.isItemShown(item)) {
      $scope.shownItem = null;
    } else {
      $scope.shownItem = item;
    }
  };
  $scope.isItemShown = function(item) {
    return $scope.shownItem === item;
  };

})

.controller('CartCtrl', function($scope, $stateParams) {

})

.controller('NewCtrl', function($scope, $stateParams, MyServices) {
    var id = "57bc4af6eb9c91f1025a3b4f";
    MyServices.getSingleExploreSmaaash(id, function(data) {
      $scope.SingleExploreSmaaash = data.data;

      console.log("$scope.SingleExploreSmaaash", $scope.SingleExploreSmaaash);

    });
  })
  .controller('SCricketCtrl', function($scope, $stateParams) {
    $scope.items = [{
      title: 'game description',
      text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
    }, {
      title: 'timing and pricing',
      text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
    }, {
      title: 'technology',
      text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
    }, {
      title: 'game description',
      text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
    }, {
      title: 'promotions',
      text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
    }, {
      title: 'photos',
      text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
    }];
    $scope.toggleItem = function(item) {
      if ($scope.isItemShown(item)) {
        $scope.shownItem = null;
      } else {
        $scope.shownItem = item;
      }
    };
    $scope.isItemShown = function(item) {
      return $scope.shownItem === item;
    };
  })

.controller('CricketCtrl', function($scope, $stateParams) {
  //   $scope.groups = [];
  // for (var i=0; i<10; i++) {
  //   $scope.groups[i] = {
  //     name: i,
  //     items: []
  //   };
  //   for (var j=0; j<3; j++) {
  //     $scope.groups[i].items.push(i + '-' + j);
  //   }
  // }

  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.items = [{
    title: 'game description',
    text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
  }, {
    title: 'timing and pricing',
    text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
  }, {
    title: 'technology',
    text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
  }, {
    title: 'game description',
    text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
  }, {
    title: 'promotions',
    text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
  }];
  $scope.toggleItem = function(item) {
    if ($scope.isItemShown(item)) {
      $scope.shownItem = null;
    } else {
      $scope.shownItem = item;
    }
  };
  $scope.isItemShown = function(item) {
    return $scope.shownItem === item;
  };

})


.controller('SelectCityCtrl', function($scope, $stateParams, MyServices, $state) {

  MyServices.getCity(function(data) {
    $scope.getCity = _.chunk(data.data, 2);
    console.log('$scope.getCity', $scope.getCity);
  })
  $scope.selectCity = function(city) {

    $.jStorage.set("cityid", city._id);
    $.jStorage.set("city", city.name);
    $state.go("noheader.signup");
  }
  $scope.uploadProfilePic = function() {
      console.log("hi");
      $cordovaImagePicker.getPictures(options).then(function(resultImage) {
        // Success! Image data is here
        console.log("hi1");

        console.log(resultImage);
        $scope.imagetobeup = resultImage[0];
        $scope.uploadPhoto(imgurl, function(data) {
          console.log(data);
          console.log(JSON.parse(data.response));
          var parsedImage = JSON.parse(data.response);
          $scope.personal.profilePicture = parsedImage.data[0];
        });
      }, function(err) {
        // An error occured. Show a message to the user
      });
    }
    // $scope.getCityName=function(cityName){
    //   $.jStorage.set("city",cityName);
    //   $scope.city=$.jStorage.get("city").name;
    // console.log("  $scope.city",  $scope.city);
    // }
})

.controller('SelectAvatarCtrl', function($scope, $stateParams, $cordovaFileTransfer, $ionicLoading, $cordovaImagePicker, $cordovaCamera) {

  $scope.startloading = function() {
    $ionicLoading.show({
      template: '<ion-spinner class="spinner-light"></ion-spinner>'
    });
  };
  $scope.collection = {
    selectedImage: ''
  };

  $scope.collection.selectedImage = "img/addphoto.png";
  $scope.imagetobeup = "img/addphoto.png";

  var options = {
    maximumImagesCount: 1,
    quality: 100
  };

  $scope.uploadProfilePic = function() {
    $cordovaImagePicker.getPictures(options).then(function(resultImage) {
      // Success! Image data is here
      console.log(resultImage);
      $scope.imagetobeup = resultImage[0];
      $scope.uploadPhoto(adminurl + "upload/", function(data) {
        console.log(data);
        console.log(JSON.parse(data.response));
        var parsedImage = JSON.parse(data.response);
        $scope.personal.profilePicture = parsedImage.data[0];
      });
    }, function(err) {
      // An error occured. Show a message to the user
    });
  }

  //  $scope.getImageSaveContact = function() {
  //      // Image picker will load images according to these settings
  //      var options = {
  //          maximumImagesCount: 1, // Max number of selected images, I'm using only one for this example
  //          width: 800,
  //          height: 800,
  //          quality: 80            // Higher is better
  //      };
  //
  //      $cordovaImagePicker.getPictures(options).then(function (results) {
  //          // Loop through acquired images
  //          for (var i = 0; i < results.length; i++) {
  //              $scope.collection.selectedImage = results[i];   // We loading only one image so we can use it like this
  //
  //              window.plugins.Base64.encodeFile($scope.collection.selectedImage, function(base64){  // Encode URI to Base64 needed for contacts plugin
  //                  $scope.collection.selectedImage = base64;
  //              });
  //          }
  //      }, function(error) {
  //          console.log('Error: ' + JSON.stringify(error));    // In case of error
  //      });
  //  };


  $scope.uploadPhoto = function(serverpath, callback) {
    console.log("function called");
    // if ($scope.imagetobeup) {
    //     $scope.startloading();
    // }
    $cordovaFileTransfer.upload(serverpath, $scope.imagetobeup, options)
      .then(function(result) {
        console.log(result);
        callback(result);
        $ionicLoading.hide();
        //$scope.addretailer.store_image = $scope.filename2;
      }, function(err) {
        // Error
        console.log(err);
      }, function(progress) {
        // constant progress updates
      });
  };
  $scope.imgURI = "img/takephoto.png";
  $scope.takePhotoCamera = function() {
    var options = {
      quality: 75,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 300,
      targetHeight: 300,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      console.log("hi1");

      $scope.imgURI = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      // An error occured. Show a message to the user
    });
  }

  $scope.choosePhoto = function() {
    var options = {
      quality: 75,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 300,
      targetHeight: 300,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      $scope.imgURI = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      // An error occured. Show a message to the user
    });
  }

})

.controller('BuyCtrl', function($scope, $stateParams) {

})

.controller('ContactCtrl', function($scope, $stateParams) {

})

.controller('AttractionsCtrl', function($scope, $stateParams, $ionicPopup, MyServices) {
  $scope.getPlan = function() {
    $scope.checkPlan = $ionicPopup.show({
      templateUrl: 'templates/modal/choose.html',
      scope: $scope
    });
  };
  $scope.closePopup = function() {
    $scope.checkPlan.close();
  }
  var ionicpop = "";
  $scope.wishlistsignupFun = function() {
    ionicpop = $ionicPopup.show({
      templateUrl: 'templates/modal/wishlistsignup.html',
      scope: $scope
    });
  }
  $scope.closeModal = function() {
    ionicpop.close();

  };


  $scope.attractionId = "57bc4b2aeb9c91f1025a3b55";

  $scope.male = '';
  $scope.female = '';
  $scope.children = '';
  $scope.filter = {};
  $scope.filter._id = $scope.attractionId;
  $scope.msg = false;
  $scope.goTOSearch = function(filter) {
    MyServices.searchExploreSmaaash($scope.filter, function(data) {
      $scope.singleAttraction = data.data;
      if ($scope.singleAttraction.length === 0) {
        $scope.msg = true;
      } else {
        $scope.msg = false;
      }

      _.each($scope.singleAttraction, function(data) {
        data.gameforarray = [];
        _.each(data.gamefor, function(n) {
          switch (n) {
            case '1':
              data.gameforarray.push('Male')
              break;
            case '2':
              data.gameforarray.push('Female')
              break;
            case '3':
              data.gameforarray.push('Children')
              break;
            default:
          }
        });
      });
    });
  }
  $scope.goTOSearch($scope.filter);

  if ($.jStorage.get("loginDetail") != null) {
    function showWishList() {
      MyServices.showWishList(function(data) {
        $scope.userwishlist = data.data.wishList;
        console.log("$scope.userwishlist", $scope.userwishlist);
      })
    };
    showWishList();
  }
  $scope.addedToWishList = function(id) {
      if ($.jStorage.get("loginDetail") == null) {
          console.log("am in if");
           $ionicPopup.show({
            templateUrl: 'templates/modal/wishlistsignup.html',
            scope: $scope
          });
      } else if ($.jStorage.get("loginDetail") != null) {
          var findIndex = _.findIndex($scope.userwishlist, function(key) {
              console.log(id, '////////');
              return key.exploresmash._id === id;
          });
          console.log("findIndex", findIndex);
          if (findIndex !== -1) {
              console.log("findIndex", findIndex);
              constraints = _.find($scope.userwishlist, function(key) {
                  return key.exploresmash._id === id;
              });
              console.log(constraints);
              NavigationService.removeFromWishList(constraints._id, function(data) {
                  console.log(data, 'removed data');
                  if (data.value) {
                      showWishList();
                      $ionicPopup.show({
                       templateUrl: 'templates/modal/removeWishlist.html',
                       scope: $scope
                     });
                  };

              });
          } else {
              NavigationService.addToWishList(id, function(data) {
                  console.log("wishlist", data);
                  if (data.value) {
                    $ionicPopup.show({
                     templateUrl: 'templates/modal/wishlist.html',
                     scope: $scope
                   });
                  }
                  showWishList();
              });
          }
      }
  };

})

.controller('EventCtrl', function($scope, $stateParams) {

})

.controller('ExploreSmaaashCtrl', function($scope, $stateParams, $ionicSlideBoxDelegate, MyServices) {

    $scope.nextSlide = function(val) {
      console.log($ionicSlideBoxDelegate.$getByHandle(val).slidesCount());
      console.log($ionicSlideBoxDelegate.$getByHandle(val).currentIndex());
      if ($ionicSlideBoxDelegate.$getByHandle(val).slidesCount() - 2 <= $ionicSlideBoxDelegate.$getByHandle(val).currentIndex()) {
        $ionicSlideBoxDelegate.$getByHandle(val).slide(0);
      } else {
        $ionicSlideBoxDelegate.$getByHandle(val).next();
      }
    };
    $scope.options = {
      loop: true
    };
    $scope.disableSwipe = function() {
      $ionicSlideBoxDelegate.enableSlide(false);
    };
    $scope.smaaashAttract = [];
    $scope.smaaashNew = [];

    $scope.smaaashParty = [];

    MyServices.getHomeContent(function(data) {
      if (data.value) {
        $scope.homeContent = data.data;
        $scope.content = _.groupBy($scope.homeContent, "type");

        $scope.smaaashAttract = $scope.content.Attraction;

        $scope.smaaashNew = $scope.content["What's new"];
        console.log(JSON.stringify($scope.content["What's new"]));

        $scope.smaaashParty = $scope.content["Host a Party"];
        console.log("$scope.smaaashParty", $scope.smaaashParty);
        console.log("$scope.smaaashNew ", $scope.smaaashNew);
        console.log("$scope.smaaashAttract", $scope.smaaashAttract);
      }

    });

    // $scope.smaaashNew = [
    //   'img/new.png',
    //   'img/new.png',
    //   'img/new.png',
    //   'img/new.png',
    //   'img/new.png'
    // ];
    // $scope.smaaashAttract = [
    //   'img/attract.png',
    //   'img/attract.png',
    //   'img/attract.png',
    //   'img/attract.png',
    //   'img/attract.png'
    // ];
    // $scope.smaaashParty = [
    //   'img/party.png',
    //   'img/party.png',
    //   'img/party.png',
    //   'img/party.png',
    //   'img/party.png'
    // ];

  })
  .controller('PaymentCtrl', function($scope, $stateParams) {
    $scope.accordion = function(val) {
      console.log($scope.showAccordion);
      console.log(val);
      if (val == $scope.showAccordion) {
        $scope.showAccordion = 0;
      } else {
        if (val == 1) {
          $scope.showAccordion = 1;
        } else if (val == 2) {
          $scope.showAccordion = 2;
        } else if (val == 3) {
          $scope.showAccordion = 3;
        } else if (val == 4) {
          $scope.showAccordion = 4;
        } else if (val == 5) {
          $scope.showAccordion = 5;
        } else {
          $scope.showAccordion = 0;
        }
      }
      console.log($scope.showAccordion);
      console.log(val);
    }

  })
  .controller('DirectionCtrl', function($scope, $stateParams) {

  })

.controller('OrderCtrl', function($scope, $stateParams) {

})

.controller('DealsCtrl', function($scope, $stateParams, MyServices) {
  var id = "57bc4b5aeb9c91f1025a3b58";
  MyServices.getSingleExploreSmaaash(id, function(data) {
    $scope.SingleDealsPackages = data.data;
  });
})

.controller('AboutCtrl', function($scope, $stateParams) {

})

.controller('AccountCtrl', function($scope, $stateParams, $ionicPopup) {
    $scope.getPlan = function() {
      $scope.checkPlan = $ionicPopup.show({
        templateUrl: 'templates/modal/headline.html',
        scope: $scope
      });
    };
    $scope.closePopup = function() {
      $scope.checkPlan.close();
    }
  })
  .controller('ConfirmOrderCtrl', function($scope, $stateParams) {

  })
  .controller('RechargeCtrl', function($scope, $stateParams, $ionicPopup) {
    $scope.popHeadline = function() {
      $scope.headlienPop = $ionicPopup.show({
        templateUrl: 'templates/modal/headline.html',
        scope: $scope
      });
    }
    $scope.closePopup = function() {
      $scope.headlienPop.close();
    }
  })

.controller('SignupCtrl', function($scope, $stateParams, $ionicPopup, $state, MyServices, $timeout) {
    var ionicpop = "";
    $scope.oneTimepswd = function() {
      ionicpop = $ionicPopup.show({
        templateUrl: 'templates/modal/otp.html',
        scope: $scope
      });
    }
    $scope.toAvatar = function() {
      ionicpop.close();
      $state.go("noheader.avatar")
    };

    $scope.userForm = {};
    $scope.formComplete = false;
    $scope.emailExist = false;
    $scope.userSignup = function(formData) {
      console.log("formData", formData);
      MyServices.signUp(formData, function(data) {
        console.log(data);
        if (data.value === true) {
            $.jStorage.set("loginDetail", data);
          $scope.formComplete = true;
          $timeout(function() {
            $scope.formComplete = false;
            $scope.emailExist = false;
            $scope.userForm = {};
          }, 2000);
        } else  {
          $scope.emailExist = true;
        }

      })
    }
  })
  .controller('BonusCtrl', function($scope, $stateParams, MyServices) {})

.controller('EarnCtrl', function($scope, $stateParams, MyServices) {
  //  $scope.nextSlide = function(val) {
  //     console.log($ionicSlideBoxDelegate.$getByHandle(val).slidesCount());
  //     console.log($ionicSlideBoxDelegate.$getByHandle(val).currentIndex());
  //     if ($ionicSlideBoxDelegate.$getByHandle(val).slidesCount() - 2 <= $ionicSlideBoxDelegate.$getByHandle(val).currentIndex()) {
  //         $ionicSlideBoxDelegate.$getByHandle(val).slide(0);
  //     } else {
  //         $ionicSlideBoxDelegate.$getByHandle(val).next();
  //     }
  // };
  // $scope.options = {
  //     loop: true
  // };
  // $scope.disableSwipe = function() {
  //     $ionicSlideBoxDelegate.enableSlide(false);
  // };


  $scope.items = [{
    title: 'game description',
    text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
  }, {
    title: 'timing and pricing',
    text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
  }, {
    title: 'technology',
    text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
  }, {
    title: 'game description',
    text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
  }, {
    title: 'promotions',
    text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
  }];
  $scope.toggleItem = function(item) {
    if ($scope.isItemShown(item)) {
      $scope.shownItem = null;
    } else {
      $scope.shownItem = item;
    }
  };
  $scope.isItemShown = function(item) {
    return $scope.shownItem === item;
  };

})

.controller('NoHeaderCtrl', function($scope, $stateParams, MyServices) {
  // MyServices.getCity(function(data) {
  //     $scope.getCity = _.chunk(data.data, 2);
  //     console.log('$scope.getCity', $scope.getCity);
  // })
  // $scope.selectCity = function(city) {
  //     $.jStorage.set("mycity", city);
  //     $state.go("noheader.signup");
  // }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {

});
