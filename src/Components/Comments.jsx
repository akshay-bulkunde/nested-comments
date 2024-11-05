const Comments = ({
    comments,
    toggleReplyInput,
    removeCommentOrReply,
    currentReplyId,
    replyInput,
    handleReplyChange,
    addReply,
  }) => {
    return (
      <div>
        {comments.map((comment) => (
          <div key={comment.id} className="ml-5">
            <div className="mt-2 h-10 border-2 border-black rounded-md flex items-center p-2" >
              <text>{comment.text}</text>
              <button
                className=" text-xs ml-24 border-2 border-black p-1 bg-gray-300"
                onClick={() => toggleReplyInput(comment.id)}
              >
                Reply
              </button>
              <button
                className="text-xs ml-2 border-2 border-black p-1  bg-gray-300"
                onClick={() => removeCommentOrReply(comment.id)}
              >
                Delete
              </button>
            </div>
            {currentReplyId === comment.id && (
              <div className="ml-5">
                <input
                  className="mt-2 border-2 border-black rounded-md"
                  type="text"
                  value={replyInput}
                  onChange={handleReplyChange}
                  placeholder="Reply..."
                />
                <button
                  className="text-xs mt-1 ml-2"
                  onClick={() => addReply(comment.id)}
                >
                  Add
                </button>
                <button
                  className="text-xs ml-2"
                  onClick={() => toggleReplyInput(null)}
                >
                  Cancel
                </button>
              </div>
            )}
            {comment.replies.length > 0 && (
              <Comments
                comments={comment.replies}
                toggleReplyInput={toggleReplyInput}
                removeCommentOrReply={removeCommentOrReply}
                currentReplyId={currentReplyId}
                replyInput={replyInput}
                handleReplyChange={handleReplyChange}
                addReply={addReply}
              />
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default Comments;