---
title: Local host WordPress development with MAMP
author: Todd Motto
layout: post
permalink: /local-host-wordpress-development-with-mamp
---
# 

Speed up your WordPress development by deploying new projects to your localhost environment by using MAMP. Nice and easy from the comfort of your own PHP files on your desktop, it’s a winner for speeding up your project, and following best practice for developing with local files.

What’s MAMP mean? Well first it’s better to understand what LAMP is – LAMP stands for Linux, Apache, MySQL, PHP – which is our usual environment on a hosting server. MAMP, however, stands for ‘Mac’, Apache, MySQL, PHP – and it’s a program we’ll be installing in this tutorial to get developing WordPress sites locally. This means we can develop without internet connection, with local files, with greater speed, with an equally easy transition onto a live server environment.

In this tutorial we’ll be covering the following:

1.  Downloading MAMP
2.  Installing MAMP
3.  Launching MAMP
4.  Setting up our Directory
5.  Downloading WordPress
6.  WordPress Database Setup
7.  wp-config.php

### Downloading MAMP

MAMP is free to download, and is currently at version 2.1.1, 145MB and requires OS X 16.6.6 and later to run. First thing’s first, let’s [download MAMP][1]. You’ll be taken to a screen as per below and just hit download to begin.

 [1]: //www.mamp.info/en/downloads/

![MAMP Download][2]

 [2]: /wp-content/uploads/2012/09/mamp-download.jpg

### Installing MAMP

You know how to do this part, but here’s a nice picture of my install. If you’re on OS X Mountain Lion, it may say you can’t install because of your security settings, so navigate to your System Preferences > Security & Privacy, unlock the padlock (bottom left) and tick ‘Allow applications downloaded from: Anywhere’, as by default these are only App Store and identified devs.

![MAMP Install][3]

 [3]: /wp-content/uploads/2012/09/installing-mamp.jpg

### Launching MAMP

After your install, go to your Applications folder, and inside it you’ll have MAMP and MAMP PRO (free trial if you want it, we’ll ignore the PRO version for this). 

![MAMP Launch][4]

 [4]: /wp-content/uploads/2012/09/mamp-launch.jpg

### Setting up our Directory

Now we need to create a space where our local files will be kept, so hit the ‘Preferences’ tab on MAMP and you should see the below. It’s currently pointing to our Applications folder, which is a bit irritating in terms of accessibility, so let’s save our files elsewhere.

![MAMP Preferences][5]

 [5]: /wp-content/uploads/2012/09/mamp-preferences.jpg

Let’s setup a new Desktop folder called ‘MAMP Sites’, which is what we’ll use for the purpose of this tutorial.

![MAMP Desktop][6]

 [6]: /wp-content/uploads/2012/09/mamp-desktop.jpg

After you’ve done that, hit ‘Select…’ tab and navigate to our new MAMP desktop folder, and press ‘Ok’. You’re done on that part.

![MAMP Desktop Site][7]

 [7]: /wp-content/uploads/2012/09/mamp-mysite.jpg

### Downloading WordPress

A quick visit to WordPress.org and we can download the latest version of WordPress.

![MAMP WP Download][8]

 [8]: /wp-content/uploads/2012/09/wordpress-download.jpg

You’ll then extract the .zip file and get the below inside a folder called ‘wordpress’.

![WordPress Files][9]

 [9]: /wp-content/uploads/2012/09/wordpress-files.jpg

Before touching our MySQL database, let’s drag our ‘wordpress’ folder into the MAMP Sites folder on our desktop.

![WordPress Files Drop][10]

 [10]: /wp-content/uploads/2012/09/mamp-sites-drop.jpg

### WordPress Database Setup

Go back to your MAMP Application and press ‘Start Servers’.

![MAMP Start][11]

 [11]: /wp-content/uploads/2012/09/mamp-start.jpg

You’ll then get some pretty green lights and things should be golden. You should then be redirected to a web page which says welcome to MAMP etc. If not, hit ‘Open Start Page’ and you’ll see the below.

![MAMP Welcome][12]

 [12]: /wp-content/uploads/2012/09/mamp-welcome.jpg

We now need to navigate to phpMyAdmin, which you can see in the top navigation.

![phpMyAdmin][13]

 [13]: /wp-content/uploads/2012/09/mamp-phpmyadmin.jpg

After the page loads, you need to click “Databases” and in the field ‘Create Database’, enter the word ‘wordpress’ or whatever you want to call your database (make note of it for later!). You’re done for this part.

![phpMyAdmin Database][14]

 [14]: /wp-content/uploads/2012/09/mamp-database.jpg

### wp-config.php

Now we’ve created our database, we can visit our brand new WordPress install and everything will be finished, right? To access this on your local host, copy and paste this into your browser (make sure your MySQL and PHP servers on MAMP are on).

    http://localhost:8888/wordpress/

…But wait, what’s this?

![WordPress Config][15]

 [15]: /wp-content/uploads/2012/09/wp-config.jpg

WordPress now needs hooking up to our new found database, let’s do it! There are two ways you can do this, edit the ‘wp-config-sample.php’ WordPress ships with, or press the ‘Create a Configuration File’ (recommended). Follow the next step until you get onto this page.

![WordPress Config Data][16]

 [16]: /wp-content/uploads/2012/09/wp-data.jpg

It’s important the credentials you use here:  
Database name: wordpress (or whatever you called it above)  
Username: root  
Password: root  
Database Host: localhost (leave as is)  
Table Prefix: wp_ (by default, add your own name at the end, keep it short)

### Success

If you’ve completed the steps above successfully, you’ll get to the ‘Site Title’ page, where you can enter all your site info and login details.

![WordPress Installation][17]

 [17]: /wp-content/uploads/2012/09/mamp-wp-install.jpg

Voila.

![WordPress Hello World][18]

 [18]: /wp-content/uploads/2012/09/mamp-helloworld.jpg