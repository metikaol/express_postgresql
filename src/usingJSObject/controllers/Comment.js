import CommentModel from '../models/Comment';

const Comment = {
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} comment object 
   */
  create(req, res) {
    if (!req.body.success && !req.body.lowPoint && !req.body.takeAway) {
      return res.status(400).send({'message': 'All fields are required'})
    }
    const comment = CommentModel.create(req.body);
    return res.status(201).send(comment);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} comments array
   */
  getAll(req, res) {
    const comments = CommentModel.findAll();
    return res.status(200).send(comments);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} comment object
   */
  getOne(req, res) {
    const comment = CommentModel.findOne(req.params.id);
    if (!comment) {
      return res.status(404).send({'message': 'comment not found'});
    }
    return res.status(200).send(comment);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} updated comment
   */
  update(req, res) {
    const comment = CommentModel.findOne(req.params.id);
    if (!comment) {
      return res.status(404).send({'message': 'comment not found'});
    }
    const updatedComment = CommentModel.update(req.params.id, req.body)
    return res.status(200).send(updatedComment);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {void} return statuc code 204 
   */
  delete(req, res) {
    const comment = CommentModel.findOne(req.params.id);
    if (!comment) {
      return res.status(404).send({'message': 'comment not found'});
    }
    const ref = CommentModel.delete(req.params.id);
    return res.status(204).send(ref);
  }
}

export default Comment;