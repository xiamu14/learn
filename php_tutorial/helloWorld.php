<?php
    class HelloWorld{
        public $world;
        function __construct($world) {
            $this->world = $world;
        }
        function getHtml(){
            return "<html>hello ".$this->world."</html>";
        }
    }

    $greetings = new HelloWorld("Epsilon Eridani II");
    echo $greetings->getHtml();
