/**
 * Import decorators and services from angular
 */
import { Component, OnInit } from '@angular/core';
import { connect } from 'sqlite-sync';

const remote = require('electron').remote,
      app = remote.app;

// Allow us to use Notification API here.
declare var Notification: any;

@Component({
  selector: 'ae-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public notes = [];

  ngOnInit() {
    this.doNotify();
    this.initDb();
    this.getNotes();
  }

  initDb() {
    var fs = require('fs');
    fs.mkdir(app.getPath('appData') + '/MESA/');

    var db = connect(app.getPath('appData') + '/MESA/test.db');
    db.run('CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT, note text NOT NULL)');
    db.close();
  }

  doNotify() {
    let message = {
      title: "MESA Test Notification",
      body: "This is how notifications look.",
    };
    new Notification(message.title, message);
  }

  saveNote(note) {
    this.notes.push(note);
    var db = connect(app.getPath('appData') + '/MESA/test.db');
    db.insert('notes', {note: note}, function(res) {
      if(res.error)
        throw res.error;
    });
    db.close();
  }

  getNotes() {
    var db = connect(app.getPath('appData') + '/MESA/test.db');
    var notes = this.notes;
    db.run("SELECT note FROM notes", function(res) {
      if(res.error)
        throw res.error;
      for(var i = 0; i < res.length; i++) {
        notes.push(res[i].note);
      }
    });
    this.notes = notes;
  }
}
