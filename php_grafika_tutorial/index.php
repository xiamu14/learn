<?php

require_once './vendor/autoload.php';

use Grafika\Grafika;
use Grafika\Color;

$editor = Grafika::createEditor();
$editor->open($image1 , './yanying.jpeg'); // 打开yanying.jpg并且存放到$image1
// $editor->resizeFit($image1 , 200 , 200);
$editor->text($image1 ,'yanying',30,200,100,new Color("#000000"),'',45);
$editor->save($image1 , './yanying1.jpeg');
