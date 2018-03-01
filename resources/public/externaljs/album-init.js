var facebook = function (account, divclass) {


          $(divclass).FacebookAlbumBrowser({
                account: account,
                accessToken: "1783905498595042|4dzoGC29YHCdwGp4VnFC3q9dChc",
                skipAlbums: ["Profile Pictures" , "Cover Photos", "Mobile Uploads"],
                showAccountInfo: true,
                showImageCount: true,
                showImageText: true,
                shareButton: true,
                photosCheckbox: false,
                likeButton: true,
                addThis: "ra-1783905498595042",
                lightbox: true,
                thumbnailSize: 150,
                photosPageSize: 50,
                photosMoreButtonText: "Több kép...",
                photoChecked: function(photo){
                    console.log("PHOTO CHECKED: " + photo.id + " - " + photo.url + " - " + photo.thumb);
                    console.log("CHECKED PHOTOS COUNT: " + this.checkedPhotos.length);
                },
                photoUnchecked: function (photo) {
                    console.log("PHOTO UNCHECKED: " + photo.id + " - " + photo.url + " - " + photo.thumb);
                    console.log("CHECKED PHOTOS COUNT: " + this.checkedPhotos.length);
                },
                albumSelected: function (photo) {
                    console.log("ALBUM CLICK: " + photo.id + " - " + photo.url + " - " + photo.thumb);
                },
                photoSelected: function (photo) {
                    console.log("PHOTO CLICK: " + photo.id + " - " + photo.url + " - " + photo.thumb);
                }
            });
        };
