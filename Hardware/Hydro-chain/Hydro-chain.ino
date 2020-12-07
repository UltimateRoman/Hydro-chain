#include<ESP8266WiFi.h>
#include<ESP8266WebServer.h>
#include<string.h>
#include<ArduinoJson.h>

#define pin_led 16
#define trig D5
#define echo D3

ESP8266WebServer server(80);
char* ssid = "Your WiFi SSID";
char* pass = "Your WiFi password";

long duration;
int distance;

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
  distance= duration*0.034/2;
  digitalWrite(pin_led,!digitalRead(pin_led));
  delay(1000);
}

void ret_value() {
  String m = String(distance);
  Serial.println("I'm returning the value");
  server.sendHeader("Access-Control-Allow-Origin","*");
  server.send(200, "text/plain", m);
}

void handle_NotFound() {
  server.send(404, "text/plain", "Not found");
}
