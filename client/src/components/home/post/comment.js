import React, { useCallback } from "react";
import moment from "moment";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_COMMENT_REQUEST } from "../../../reducer/post";

moment.locale("ko");
const Comment = ({ comment, postId }) => {
  // λκΈ
  console.log(comment);
  const { info } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onRemoveComment = useCallback(
    (commentId) => (e) => {
      e.preventDefault();
      dispatch({
        type: REMOVE_COMMENT_REQUEST,
        data: {
          postId: postId,
          commentId: commentId,
        },
      });
    },
    [dispatch, postId]
  );

  return (
    <StyledComment>
      {comment &&
        comment.map((v) => (
          <div className="inner" key={v.id}>
            <div className="username">{v.User.name}</div>
            <div className="text">{v.content}</div>
            <div className="date">{moment().format("YYYY.MM.DD")}</div>
            <div className="replyBtn">π¬</div>
            {info && info.id === v.User.id && (
              <div className="removeBtn" onClick={onRemoveComment(v.id)}>
                β
              </div>
            )}
          </div>
        ))}
    </StyledComment>
  );
};

export default Comment;

const StyledComment = styled.div`
  box-sizing: border-box;

  & .inner {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    color: #666;
    width: 100%;
    padding: 0.2rem 0;

    .username {
      width: 15%;
    }

    .text {
      box-sizing: border-box;
      padding: 0 0.2rem;
      width: 65%;
    }

    .date {
      box-sizing: border-box;
      padding: 0 0.2rem;
      width: 12%;
      color: #999;
    }

    .replyBtn,
    .removeBtn {
      box-sizing: border-box;
      padding-left: 0.2rem;
      width: 5%;
      cursor: pointer;
      text-align: right;
    }
  }
`;
