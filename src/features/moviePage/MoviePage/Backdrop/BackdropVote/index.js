import { Wrapper, Star, Average, OutOf, Count, CounterWrapper } from "./styled";

export const BackdropVote = ({ vote }) => (
  !!vote && (
    <Wrapper>
      { vote?.count > 0 ? 
      (<>
        <Star />
        {!!vote?.average && (
          <CounterWrapper>
            <Average>{vote.average.toFixed(1)}</Average>
            <OutOf>/ 10</OutOf>
          </CounterWrapper>
        )}
        <Count $noVotes={!vote?.count}>
          {vote?.count
            ? `${vote.count} ${vote.count === 1 ? "vote" : "votes"}`
            : "no votes yet"
          }
        </Count>
      </>) 
      : 
      (<Count>No votes yet</Count>)}

    </Wrapper>
  )
);