---
title: "Hack The Home"
date: 2022-10-19
draft: false
categories: ["hacking"]
tags: ["hardware", "reverse-engineering"]
---

## The Home

Last spring I moved to new house. After unpack and organizing my stuffs, Only now did I see the device attaching on the wall. There was a LCD display home controller can controls Lights, Power socket, Ventilator and etc.

<!-- more -->

<center>
<img src="/images/posts/hackthehome-01.jpeg" width="80%" title="img1"/>
</center>

In South Korea, Most recently built apartments have smart home systems installed. In addition, most homes have functions to control home devices, such as turning off the lights in the house using a smartphone app.
But controlling with a app was very inconvenient to log in, and the performance of the app and server were also very slow.

I have lots of hacking experiences about hack this type device as a Pentester, I thought I should make it faster by hacking.

## Hardware Layer

When I detach a device from the wall, I can see UTP cable and lots of RS-485 interfaces.
