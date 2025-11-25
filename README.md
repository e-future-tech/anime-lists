Name		: anime-lists

Desc		: Project anime list yang di buat dengan laravel, laravel-breeze, react.js dan inertia.js. User dapat mencari dan menyimpan anime favorit mereka.

Repo github	: https://github.com/e-future-tech/anime-lists.git

Structures
- Bootstrap 5
- Laravel
- Laravel Breeze
- React.js
- Inertia.js
- Mysql

- Email : https://mailtrap.io/
- Rest api anime : https://jikan.moe/ 

--------------------------------------------------------------------------------------------------------

- Home 
	- top upcoming 14 items
	-> detail
	-> top anime
	-> seasons
	-> search 
	-> to detail
- seasons 
	- list of seasons
	-> To Seasonal Anime
- Seasonal Anime
	- show animes by seasons
	-> Paginations, same page
	-> Search anime by name
	-> To Detail Page

	- filter by type, sort by score, year // cmn bisa filter di 1 halaman 

	- account only : add favorites
	- account only : add wishlist
- top anime
	- show top animes 
	-> Paginations, same page
	-> Search anime by name
	-> To Detail Page

	- account only : add favorites
	- account only : add wishlist
- Search
	- search by name, show list by name
	- filter by type, sort by score, year // cmn bisa filter di 1 halaman 
	-> To Detail Page
	-> Search anime by name
	- account only : add favorites
	- account only : add wishlist
- Detail 
	- detail about anime
	-> sequel, other in same page
	-> see recommend

	- account only : add favorites
	- account only : add wishlist
- recommendation by name
	- see recommend by name
	-> detail

- About
	- Show about
- Login
	- input email, pass, remember, login
	-> forgot pass
	-> register new member
	-> success to home
- register
	- input name, email, pass, confirm_pass
	-> already registered to login
	-> success to home
- forgot password 
	- reset password, new password // https://mailtrap.io/

- account : Favorites
	- see favorites
	- filter by type, sort by score, year // cmn bisa filter di 1 halaman 
	-> Search anime by name
	-> paginations, same page, laravel
	-> To Detail Page

	- account only : add favorites
	- account only : add wishlist

- account : wishlist
	- see wishlist
	- lazy loading
	-> To Detail Page

- account : Profile
	- update name, password, delete account











