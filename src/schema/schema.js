export default {
  'postsList': {
    '$id': 'postList',
    'type': 'array',
    'items': {
      '$id': '/postList/items',
      'type': 'object',
      'properties': {
        'id': {
          '$id': '/postList/items/properties/id',
          'type': 'integer',
          'default': 0
        },
        'title': {
          '$id': '/postList/items/properties/title',
          'type': 'string',
          'default': ''
        },
        'author': {
          '$id': '/postList/items/properties/author',
          'type': 'string',
          'default': ''
        }
      },
      'required': [
        'id',
        'title'
      ]
    }
  }
}
