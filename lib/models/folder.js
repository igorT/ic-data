import { Model, attr, hasMany, belongsTo } from 'ember-data';

var Folder = Model.extend({
  parent_folder: belongsTo('folder', {async:true, inverse:'folders'}),

  folders: hasMany('folder', { async:true, inverse: 'parentFolder' }),

  //files: hasMany('file'),

  context_type: attr(),

  context_id: attr(),

  files_count: attr(),

  position: attr(),

  folders_url: attr(),

  files_url: attr(),

  full_name: attr(),

  isRoot: null,

  course_id: attr(),

  courseIdProperty: function(){
    var id = this.get('course_id');
    if (id){
      this.set('courseIdCache', id);
      return id;
    }
    return this.get('courseIdCache');
  }.property('course_id'),

  fullNameProperty: function(){
    var id = this.get('full_name');
    if (id){
      this.set('fullNameCache', id);
      return id;
    }
    return this.get('fullNameCache');
  }.property('full_name'),

  folders_count: attr(),

  name: attr(),

  /*
  TODO uncomment once we figuure out the container isssue
  created_at: attr('date'),

  updated_at: attr('date'),

  lock_at: attr('date'),

  unlock_at: attr('date'),

  hidden: attr('boolean'),

  hidden_for_user: attr('boolean'),

  locked: attr('boolean'),

  locked_for_user: attr('boolean'),
  */

});

export default Folder;

