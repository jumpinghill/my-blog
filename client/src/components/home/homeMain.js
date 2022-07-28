import React, { useEffect } from "react";
import styled from "styled-components";
import Post from "./post/post";
import PostForm from "./post/postForm";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_ALLPOSTS_REQUEST } from "../../reducer/post";

const HomeMain = () => {
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.user);
  const { allPosts, allpostsDone } = useSelector((state) => state.post);
  console.log(useSelector((state) => state.user));
  // user에 있는 state를 가져옴.
  // allPosts는 모든게시물 올린거임.

  useEffect(() => {
    if (!allpostsDone) {
      dispatch({
        type: LOAD_ALLPOSTS_REQUEST,
      });
    }
  }, [allpostsDone]);

  // info가 없으면 로그인이 안된것이므로 <PostForm />이 나타날수없다.
  // 로그인되면 info가 있는것이므로 <PostForm />이 나타남.
  // 이거는 현재 지금 없음.
  // allPosts.map((post) => <Post key={post.id} post={post} />);
  return (
    <StyledWrap>
      {info && <PostForm />}
      {allPosts && allPosts.map((post) => <Post key={post.id} post={post} />)}
    </StyledWrap>
  );
};
// 게시물 저장은 어디서 하고있는거지?
// allPosts는 모든게시물 올린거임.
// allPosts는 배열로 되어있고 [{…}, {…}, {…}] 여기서 map반복문을 돌려 Post컴포넌트에 props로 전달, 각 객체를 매개변수로 post로.
// 그리고 다시 새배열로 변환.
// 처음에는 빈배열 [] 이었다가 LOAD_ALLPOSTS_SUCCESS 이후에 [{…}, {…}, {…}] 안에 객체가 생김.

export default HomeMain;

const StyledWrap = styled.div`
  box-sizing: border-box;
  max-width: 50rem;
  min-width: 18.75rem;
  width: 80%;
  height: 100%;
  margin: 0 auto;
`;
