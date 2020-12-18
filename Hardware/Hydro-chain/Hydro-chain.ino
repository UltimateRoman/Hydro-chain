#include<ESP8266WiFi.h>
#include<ESP8266WebServer.h>
#include<string.h>

#define pin_led 16
#define trig D5
#define echo D3
#define radius 10

ESP8266WebServer server(80);
char* ssid = "Your WiFi SSID";
char* pass = "Your WiFi password";

long duration;
int distance1;
int distance=0;
float volume=0;

void setup() {
  pinMode(pin_led, OUTPUT);
  pinMode(trig, OUTPUT);
  pinMode(echo, INPUT);
  WiFi.begin(ssid, pass);
  Serial.begin(9600);
  while(WiFi.status()!=WL_CONNECTED) {
    Serial.println(".");
    delay(500);
  }
  Serial.println(WiFi.localIP());
  server.on("/", ret_value);
  server.onNotFound(handle_NotFound);
  server.begin();
}

void loop() {
  server.handleClient();
  digitalWrite(trig, LOW);
  delayMicroseconds(2);
  digitalWrite(trig, HIGH);
  delayMicroseconds(10);
  digitalWrite(trig, LOW);
  duration = pulseIn(echo, HIGH);
  distance1 = duration*0.034/2;
  if(distance) {
    if(distance1 > distance) {
      Serial.println(distance1);
      volume += ((distance1-distance)*3.1415*radius*radius)/1000;
    }
  }
  distance = distance1;
  digitalWrite(pin_led,!digitalRead(pin_led));
  delay(1000);
}

void ret_value() {
  String m = String(volume);
  Serial.println("I'm returning the value");
  server.sendHeader("Access-Control-Allow-Origin","*");
  server.send(200, "text/plain", m);
}

void handle_NotFound() {
  server.send(404, "text/plain", "Not found");
}
