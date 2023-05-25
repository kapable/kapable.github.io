const ARTICLES = [
    {
        mainTitle: `DNA 테스트 MBTI 및 해석 결과`,
        date:`2023-05-25`,
        mainUrl:`DNAblog`,
        thumbImg:"https://images.ktestone.com/blog/DNA/DNA-blog-thumb.jpg",
        desc:`케이테스트 x DNA 테스트`,
        contents:`
            <h3><b>DNA 테스트 MBTI 및 해석 결과</b></h3>
            <p>총 12가지 질문으로 구성된 DNA 테스트 입니다.<br />DNA 성격테스트 MBTI에 대해 안내해드리겠습니다.</p>

            <h4><br /><b>ENTP 말빨 DNA</b></h4>
            <p>사람과 조직의 문제점을 빠르게 파악하고 해결사 역할을 해요<br />처음 보는 사람과 터울 없이 말을 하고, 논리적으로 말하는 편이에요.<br />당당하고 솔직한 편이고, 무엇보다 자기애가 굉장히 높아요.<br />풍부한 아이디어를 바탕으로 끊임없는 도전을 즐겨요.<br />하지만 마무리가 끝까지 안 되는 경향이 있어요.</p>
            <img src='https://images.ktestone.com/resultImages/DNA/ENTP.jpg' alt='ENTP' /><br /><br />

            <h4><br /><b>ESFP 자유DNA</b></h4>
            <p>선입견이 없고, 친화력이 좋아요.<br />친구들 사이에서 모르는 사람이 없는 핵인싸 재질이에요.<br />겉으론 낙천적이고 털털한 편이지만, 사실 현실적인 걱정이 많아요.<br />사람들에게 긍정적인 리액션과 공감을 잘해줘요.<br />할 일 미루기가 주특기에요.</p>
            <img src='https://images.ktestone.com/resultImages/DNA/ESFP.jpg' alt='ESFP' /><br /><br />

            <h4><br /><b>ESTJ 솔직 DNA</b></h4>
            <p>사람들 앞에서 나서서 말하는 것을 잘하고,<br />말투가 당당하고 솔직한 편이라 가끔은 오해를 사기도 해요.<br />똑 부러지고, 정직한 성격이에요.<br />갈등 상황에는 피하지 않고 논리를 바탕으로 해결하려고 해요.<br />계획을 미리 세워 놓는 편이며, 틀어지면 매우 예민해져요.</p>
            <img src='https://images.ktestone.com/resultImages/DNA/ESTJ.jpg' alt='ESTJ' /><br /><br />

            <h4><br /><b>ESTP 본능 DNA</b></h4>
            <p>쾌활하고, 선입견 없는 단순한 성격으로 친구들이 많아요.<br />순간적인 센스와 말빨로 사람들을 빵 터트리기도 해요.<br />매우 현실적인 편이지만, 내기나, 주식 등 승부욕에<br />사로잡혀 뜻하지 않은 지출을 할 때가 있어요.<br />남들과는 다른 도전을 즐기지만, 다소 뒷심이 부족한 면이 있어요.</p>
            <img src='https://images.ktestone.com/resultImages/DNA/ESTP.jpg' alt='ESTP' /><br /><br />

            <h4><br /><b>ESFJ 평화 DNA</b></h4>
            <p>친화력이 뛰어나고, 인간관계를 중요시하는 성격이에요.<br />다른 사람들 반응에 민감하고, 항상 배려 있게 대해요.<br />인정과 칭찬을 매우 좋아하고, 외로움은 견디기 힘들어해요.<br />다른 사람들에게 해결 방법보다는 감정적인 공감을 주로 하는 타입이에요<br />계획을 철저하게 세우고, 계획이 틀어지면 매우 예민해져요.</p>
            <img src='https://images.ktestone.com/resultImages/DNA/ESFJ.jpg' alt='ESFJ' /><br /><br />

            <h4><br /><b>ENFJ 의리 DNA</b></h4>
            <p>사교성이 뛰어나고, 말을 재치 있게 잘함<br />항상 기분 좋은 에너지를 발산함<br />감정적인 공감 능력이 뛰어나 사람들 사이에서 온화한 리더가 됨<br />상대의 좋은 점 먼저 보고 생각함<br />상상력이 풍부해 일어나지 않은 일을 걱정할 때가 있음<br />계획적으로 생활을 하려고 하는 스타일임</p>
            <img src='https://images.ktestone.com/resultImages/DNA/ENFJ.jpg' alt='ENFJ' /><br /><br />

            <h4><br /><b>ENTP 긍정 DNA</b></h4>
            <p>다른 사람들에게 관심이 많고, 함께 노는 것을 즐기는 성격으로<br />시간이 지날수록 에너지가 차오르는 성격이에요.<br />가끔 엉뚱한 상상력으로 주변 사람들을 당황하게 하기도 해요<br />감정 기복이 다소 심하지만, 티를 잘 내지 않다가 한 번에 터져 나오기도 해요.<br />호기심이 많고, 감성적인 것에 약해 충동적으로 무언가를 구매하는 경향이 있어요.</p>
            <img src='https://images.ktestone.com/resultImages/DNA/ENTP.jpg' alt='ENTP' /><br /><br />

            <h4><br /><b>ENTJ 리더 DNA</b></h4>
            <p>강한 자기주장과 추진력을 겸비한 리더 그 자체의 성격이에요.<br />상상력이 뛰어나고, 아이디어를 바탕으로 도전하는 것을 즐겨요.<br />효율적인 것을 좋아하고, 승부욕이 넘쳐요<br />목표 지향적인 삶을 살려고 하고, 계획적이고 치밀해요.<br /></p>
            <img src='https://images.ktestone.com/resultImages/DNA/ENTJ.jpg' alt='ENTJ' /><br /><br />

            <h4><b>INFP 감성 DNA</b></h4>
            <p>감정적이고, 삶에 대한 이상적인 상상을 많이 하는 성격이에요<br />처음 가는 공적인 자리에서는 낯을 가리지만,<br />처음 보는 사람에게는 말을 곧 잘 걸어요.<br />감정 기복이 심한 편이에요.<br />단순한 것을 좋아하고, 규율, 규칙을 중요시하는 성격이에요.</p>
            <img src='https://images.ktestone.com/resultImages/DNA/INFP.jpg' alt='INFP' /><br /><br />

            <h4><br /><b>INFJ 고뇌 DNA</b></h4>
            <p>감성적이고 자신만의 가치관이 뚜렷한 성격이에요.<br />상상력이 풍부하고, 생각과 고민을 많이 해요!<br />상대방의 말에 경청을 잘하고 리액션이 좋아요.<br />계획적으로 생각하고, 섬세한 성격이에요.</p>
            <img src='https://images.ktestone.com/resultImages/DNA/INFJ.jpg' alt='INFJ' /><br /><br />

            <h4><br /><b>ISFP 여유 DNA</b></h4>
            <p>평소 조용하고 사람 많은 곳을 기 빨려 하는 성격이에요.<br />경제관념이 뛰어나며, 분석적이고 비판적인 판단을 잘해요.<br />감정에 충실하지만, 티는 내지 않고 정이 많은 성격이에요.<br />새로운 것을 시도하는 것을 즐기지만, 마무리는 다소 아쉬운 부분이 있어요.</p>
            <img src='https://images.ktestone.com/resultImages/DNA/ISFP.jpg' alt='ISFP' /><br /><br />

            <h4><br /><b>ISFJ 예의 DNA</b></h4>
            <p>예의를 중요하게 생각하고, 우직한 성격의 소유자예요.<br />속이 깊고, 인내심이 좋은 편이에요.<br />감정적인 공감을 잘하면서도, 합리적인 선택을 고집해요.<br />뭐든 계획적으로 실행하는 편이며, 매우 섬세한 완벽주의자예요.</p>
            <img src='https://images.ktestone.com/resultImages/DNA/ISFJ.jpg' alt='ISFJ' /><br /><br />

            <h4><br /><b>ISTJ 규칙 DNA</b></h4>
            <p>혼자 있는 시간을 소중하게 생각하는 독립적인 성격이에요.<br />매우 현실적이며, 항상 합리적인 선택을 하는 성격이에요.<br />감정보다는 논리를 앞세우며, 먼저 머리로 이해해야 하는 타입이에요.<br />뭐든 계획을 세워 순차적으로 질서 있게 진행하는 것을 선호해요.</p>
            <img src='https://images.ktestone.com/resultImages/DNA/ISTJ.jpg' alt='ISTJ' /><br /><br />

            <h4><br /><b>ISTP 독립 DNA</b></h4>
            <p>내향적이며, 소수와 깊게 어울리는 성격으로,<br />타인에게 무관심하지만 내 사람들이라고 판단되는 사람들에게는 최선을 다해요.<br />머리가 좋아 항상 이유가 타당하고 효율적인 선택을 해요.<br />하지만 게으른 탓에 탁월한 선택과 과정에 비해 결과가 아쉬운 편이에요.</p>
            <img src='https://images.ktestone.com/resultImages/DNA/ISTP.jpg' alt='ISTP' /><br /><br />

            <h4><br /><b>INTP 논리 DNA</b></h4>
            <p>평소 내향적이지만 외향적으로 바꿀 수 있는 선택적 내향인이에요.<br />참신한 아이디어와 상상력이 가득하지만, 아쉽게도<br />당장 실현 가능성이 있는 아이디어는 별로 없어요.<br />항상 논리를 앞세워 자기 아이디어를 이야기하지만,<br />귀찮음이 많아 실행하는 데는 항상 어려움이 발생해요.</p>
            <img src='https://images.ktestone.com/resultImages/DNA/INTP.jpg' alt='INTP' /><br /><br />

            <h4><br /><b>INTJ 모범 DNA</b></h4>
            <p>체계적이고 계획적인 것을 선호하는 완벽주의자 성향의 소유자예요.<br />혼자 있는 시간도 그냥 보내지 않고 자기 계발을 하는 치밀한 갓생러죠.<br />상상력이 풍부하고 미리 무언가를 예측하는 것을 즐기고 잘하는 능력이 있어요.<br />그래서 삶에서 계획을 빼놓을 수 없고, 계획에 맞춰 체계적인 삶을 살려고 하는 유형이에요.<br /></p>
            <img src='https://images.ktestone.com/resultImages/DNA/INTJ.jpg' alt='INTJ' /><br /><br />

            <h3><b>DNA 성격 테스트 MBTI 정리표</b></h3>
            <img src='https://images.ktestone.com/blog/DNA/DNA-blog-table.jpg' alt='DNA-blog-table' /><br /><br />
        `,
        relatedArticles:[],
        category:"MBTI"
    },
    {
        mainTitle: `DIY 테스트 MBTI 및 해석 결과`,
        date:`2023-05-25`,
        mainUrl:`DIYblog`,
        thumbImg:"https://images.ktestone.com/blog/DIY/DIY-blog-thumb.jpg",
        desc:`케이테스트 x DIY 테스트`,
        contents:`
            <h3><b>DIY 테스트 MBTI 및 해석 결과</b></h3>
            <p>총 12가지 질문으로 구성된 DIY 테스트 입니다.<br />DIY 성격테스트 MBTI에 대해 안내해드리겠습니다.</p>

            <h4 data-ke-size="size20"><b>ENTP 행복회로 DIY </b></h4>
            <p data-ke-size="size16">열정 열정 열정<span>!</span></p>
            <p data-ke-size="size16">왜<span>?</span></p>
            <p data-ke-size="size16">노빠꾸</p>
            <p data-ke-size="size16">내가 단점이 있었나<span>?</span></p>
            <p data-ke-size="size16">어디에다 뒀더라<span>?</span></p>
            <p data-ke-size="size16">무조건 내 말이 맞아</p>
            <p data-ke-size="size16">지루해 죽겠네<span>..</span></p>
            <p data-ke-size="size16">내가 맘만 먹으면 다 잘하지</p>
            <p data-ke-size="size16">될 대로 되라</p>
            <p data-ke-size="size16">눈치 빠르지만<span>, </span>신경 안 씀</p>
            <p data-ke-size="size16">하지 말라고<span>?! (</span>빡침<span>)</span></p>
            <p data-ke-size="size16">극한의 효율 충</p>
            <p data-ke-size="size16">그냥 즐겨</p>
            <p data-ke-size="size16">인생 꿀 빨고 싶다</p>
            <p data-ke-size="size16">공감 능력 학습함</p>
            <p data-ke-size="size16">나 진짜 천재 아니야<span>?<span>             </span></span></p>
            <p data-ke-size="size16">무조건 <span>1</span>등만 노린다</p>
            <p data-ke-size="size16">이거 꿀 잼일 듯<span>?</span></p>
            <p data-ke-size="size16">막판 스퍼트</p>
            <p data-ke-size="size16">당당함과 뻔뻔함 사이</p>
                        <img src='https://images.ktestone.com/resultImages/DIY/ENTP.jpg' alt='ENTP' /><br /><br />

                        <h4 data-ke-size="size20"><b>ESFP 수다쟁이 DIY </b></h4>
            <p data-ke-size="size16">극 외향인</p>
            <p data-ke-size="size16">할 일은 일단 미루고 봄</p>
            <p data-ke-size="size16">제발 나에게 관심을 줘<span>!!</span></p>
            <p data-ke-size="size16">홧김에 말하고 후회 중</p>
            <p data-ke-size="size16">근자감</p>
            <p data-ke-size="size16">어색하면 아무 말 내뱉기</p>
            <p data-ke-size="size16">개복치 급 멘탈</p>
            <p data-ke-size="size16">안 읽은 카톡 수두룩함</p>
            <p data-ke-size="size16">성질 급함</p>
            <p data-ke-size="size16">친구 왕 많음</p>
            <p data-ke-size="size16">스트레스받으면 졸림</p>
            <p data-ke-size="size16">분위기 메이커</p>
            <p data-ke-size="size16">현재와 순간을 소중히</p>
            <p data-ke-size="size16">남에게 싫은 소리 잘 못 함</p>
            <p data-ke-size="size16">유행에 민감함</p>
            <p data-ke-size="size16">흥 부자</p>
            <p data-ke-size="size16">지름신 강림</p>
            <p data-ke-size="size16">복잡한 건 딱 질색</p>
            <p data-ke-size="size16">신박한 유머 코드</p>
                        <img src='https://images.ktestone.com/resultImages/DIY/ESFP.jpg' alt='ESFP' /><br /><br />

                        <h4 data-ke-size="size20"><b> </b><br /><b>ESTJ 바른생활 DIY</b></h4>
            <p data-ke-size="size16">미루는 것까지 계획함</p>
            <p data-ke-size="size16">목적이 있을 때만 공감</p>
            <p data-ke-size="size16">남 하는 거 답답해서 리더 맡는 편</p>
            <p data-ke-size="size16">약속은 칼 같이 지킴</p>
            <p data-ke-size="size16">신나게 떠들다가 갑자기 내숭 떨기</p>
            <p data-ke-size="size16">그래서 결론이 뭔데<span>?</span></p>
            <p data-ke-size="size16">잔소리로 애정표현함</p>
            <p data-ke-size="size16">아무튼 아부는 절대 못 함<span>, </span>안 함<span>!</span></p>
            <p data-ke-size="size16">승부욕</p>
            <p data-ke-size="size16"><span>Workaholic</span></p>
            <p data-ke-size="size16">안되면 될 때까지</p>
            <p data-ke-size="size16">공과 사 구분 철저</p>
            <p data-ke-size="size16">아 빨리 말해<span>!</span></p>
            <p data-ke-size="size16">정리병</p>
            <p data-ke-size="size16">난 한 놈만 팬다</p>
            <p data-ke-size="size16">줏대 없으면 속 터짐</p>
            <p data-ke-size="size16">젊은 꼰대</p>
            <p data-ke-size="size16">뒷담 경멸함</p>
            <p data-ke-size="size16">솔직함</p>
                        <img src='https://images.ktestone.com/resultImages/DIY/ESTJ.jpg' alt='ESTJ' /><br /><br />

                        <h4 data-ke-size="size20"><b></b><br /><b>ESTP 얼렁뚱땅 DIY</b></h4>
            <p data-ke-size="size16">느낌 왔다<span>!</span></p>
            <p data-ke-size="size16">패션피플</p>
            <p data-ke-size="size16">유난스럽다</p>
            <p data-ke-size="size16">그냥 내가 짱 임</p>
            <p data-ke-size="size16">너가 뭘 알아<span>?</span></p>
            <p data-ke-size="size16">노는 게 제일 좋아<span>!</span></p>
            <p data-ke-size="size16">핵관종</p>
            <p data-ke-size="size16">칭찬 좋아<span>!</span></p>
            <p data-ke-size="size16">화가 많음</p>
            <p data-ke-size="size16">비싸고 예쁜 게 좋아<span>!</span></p>
            <p data-ke-size="size16">마이웨이</p>
            <p data-ke-size="size16">내 알바야<span>?</span></p>
            <p data-ke-size="size16">적당히 잘 먹고 잘살자</p>
            <p data-ke-size="size16">의리 빼면 시체</p>
            <p data-ke-size="size16">드립에 선이 없음</p>
            <p data-ke-size="size16">쫄<span>?</span></p>
            <p data-ke-size="size16">물건 잘 잃어버림</p>
            <p data-ke-size="size16">능글맞음</p>
            <p data-ke-size="size16">플러팅 장인</p>
                        <img src='https://images.ktestone.com/resultImages/DIY/ESTP.jpg' alt='ESTP' /><br /><br />

                        <h4 data-ke-size="size20"><b></b><br /><b>ESFJ 친목러 DIY</b></h4>
            <p data-ke-size="size16">극한의 계획충</p>
            <p data-ke-size="size16">미리미리 하자</p>
            <p data-ke-size="size16">뭐 하나 꽂히면 계속 신경 씀</p>
            <p data-ke-size="size16">유리멘탈</p>
            <p data-ke-size="size16">친화력 끝판왕</p>
            <p data-ke-size="size16">눈치 백단</p>
            <p data-ke-size="size16">사소한 것에 서운함</p>
            <p data-ke-size="size16">다들 나한테 왜 그래 ㅠ</p>
            <p data-ke-size="size16">사소한 행복을 느낌</p>
            <p data-ke-size="size16">스윗함</p>
            <p data-ke-size="size16">나는 양쪽 다 이해돼<span>!</span></p>
            <p data-ke-size="size16">성격 좋다는 말 자주 들음</p>
            <p data-ke-size="size16">빚 지면 꼭 갚음</p>
            <p data-ke-size="size16">팔랑귀</p>
            <p data-ke-size="size16">인싸 중 인싸</p>
            <p data-ke-size="size16">민폐부리는 것 극혐함</p>
            <p data-ke-size="size16">이성 친구가 더 편함</p>
            <p data-ke-size="size16">질투의 화신</p>
            <p data-ke-size="size16"><span>TMI</span></p>
                        <img src='https://images.ktestone.com/resultImages/DIY/ESFJ.jpg' alt='ESFJ' /><br /><br />

                        <h4 data-ke-size="size20"><b> </b><br /><b>ENFJ 힐러 DIY</b></h4>
            <p data-ke-size="size16">센스쟁이</p>
            <p data-ke-size="size16">순두부 멘탈</p>
            <p data-ke-size="size16">상처 잘 받음</p>
            <p data-ke-size="size16">정이 많음</p>
            <p data-ke-size="size16">힘내<span>!</span></p>
            <p data-ke-size="size16">헌신적</p>
            <p data-ke-size="size16">위로 장인</p>
            <p data-ke-size="size16">극한의 인내심</p>
            <p data-ke-size="size16">불의는 못 참아<span>!</span></p>
            <p data-ke-size="size16">무슨 이유가 있겠지<span>..</span></p>
            <p data-ke-size="size16">공감 능력 만렙</p>
            <p data-ke-size="size16">스스로를 잘 앎</p>
            <p data-ke-size="size16">꿈이 백만 개</p>
            <p data-ke-size="size16">리더십</p>
            <p data-ke-size="size16">도움이 되고 싶어 함</p>
            <p data-ke-size="size16">자책함</p>
            <p data-ke-size="size16">사회생활 만렙</p>
            <p data-ke-size="size16">사교적</p>
            <p data-ke-size="size16">유머감각</p>
                        <img src='https://images.ktestone.com/resultImages/DIY/ENFJ.jpg' alt='ENFJ' /><br /><br />

                        <h4 data-ke-size="size20"><b> </b><br /><b>ENFP 인간 스파크 DIY</b></h4>
            <p data-ke-size="size16">서운해<span>!! </span>ㅠ</p>
            <p data-ke-size="size16">마당발</p>
            <p data-ke-size="size16">사람 자체를 좋아함</p>
            <p data-ke-size="size16">하고 싶은 게 많음</p>
            <p data-ke-size="size16">모두에게 사랑받고 싶어<span>!</span></p>
            <p data-ke-size="size16">인간 비타민</p>
            <p data-ke-size="size16">이 분위기를 바꿔 볼까<span>?</span></p>
            <p data-ke-size="size16">뭐해<span>?^^</span></p>
            <p data-ke-size="size16">나랑 놀아줄 <span>OOO </span>구함<span>!</span></p>
            <p data-ke-size="size16">다른 사람들이 너무 궁금함</p>
            <p data-ke-size="size16">아 진짜<span>?!</span></p>
            <p data-ke-size="size16"><span>(</span>이제 말 그만 걸어야ㅈ<span>..) </span>아니 근데 있잖아</p>
            <p data-ke-size="size16">썰 창고</p>
            <p data-ke-size="size16">참을 수 없는 개그 욕심</p>
            <p data-ke-size="size16">진심 내일부터 한다</p>
            <p data-ke-size="size16">옆 사람 귀에서 피나는 중</p>
            <p data-ke-size="size16">분위기에 따라 기분이 널뜀</p>
            <p data-ke-size="size16">우울한거<span>X </span>잠깐 기죽은 거<span>O</span></p>
            <p data-ke-size="size16">무한 에너지</p>
                        <img src='https://images.ktestone.com/resultImages/DIY/ENTP.jpg' alt='ENTP' /><br /><br />

                        <h4 data-ke-size="size20"><b> </b><br /><b>ENTJ 골목대장 DIY</b></h4>
            <p data-ke-size="size16">왜 지금 너가 화를 내<span>?</span></p>
            <p data-ke-size="size16">자기 일에 자부심 넘침</p>
            <p data-ke-size="size16">생각하면 바로 실행</p>
            <p data-ke-size="size16">팩폭</p>
            <p data-ke-size="size16">관심 없으면 알 바 아님</p>
            <p data-ke-size="size16">관심 많으면 폭풍 질문</p>
            <p data-ke-size="size16">쿨 한 거 <span>X </span>빠른 감정 정리 <span>O</span></p>
            <p data-ke-size="size16">역시 내가 최고야</p>
            <p data-ke-size="size16">리더십</p>
            <p data-ke-size="size16">목표 없는 삶은 죽으라는 거</p>
            <p data-ke-size="size16">완벽주의자</p>
            <p data-ke-size="size16">똑똑함</p>
            <p data-ke-size="size16">하면 다 돼</p>
            <p data-ke-size="size16">멍청한 거 못 참음</p>
            <p data-ke-size="size16">답답해<span>!</span></p>
            <p data-ke-size="size16">나르시시즘</p>
            <p data-ke-size="size16">눈이 높음</p>
            <p data-ke-size="size16">맞춤법에 민감함</p>
            <p data-ke-size="size16">거침없는 추진력</p>
                        <img src='https://images.ktestone.com/resultImages/DIY/ENTJ.jpg' alt='ENTJ' /><br /><br />

                        <h4 data-ke-size="size20"><br /><b>INFP 우유부단 DIY</b></h4>
            <p data-ke-size="size16">가치관이 확고함</p>
            <p data-ke-size="size16">선입견 없음</p>
            <p data-ke-size="size16">조용한 관종</p>
            <p data-ke-size="size16">혼자만의 시간을 좋아함</p>
            <p data-ke-size="size16">극단적인 인간관계 정리</p>
            <p data-ke-size="size16">자기애 높음</p>
            <p data-ke-size="size16">자존감 낮음</p>
            <p data-ke-size="size16">유리 멘탈</p>
            <p data-ke-size="size16">갬성적</p>
            <p data-ke-size="size16">어디로 튈지 모르는 감정</p>
            <p data-ke-size="size16">의심이 많음</p>
            <p data-ke-size="size16">우유부단</p>
            <p data-ke-size="size16">잔걱정 많음</p>
            <p data-ke-size="size16">상대방 말투<span>, </span>표정 하나까지 신경 씀</p>
            <p data-ke-size="size16">가끔 현실감각 없어짐</p>
            <p data-ke-size="size16">무계획도 계획임</p>
            <p data-ke-size="size16">모르는 사람에게 말 잘 검</p>
            <p data-ke-size="size16">서운해도 자존심 때문에 말 못 함</p>
                        <img src='https://images.ktestone.com/resultImages/DIY/INFP.jpg' alt='INFP' /><br /><br />

                        <h4 data-ke-size="size20"><b> </b><br /><b>INFJ 인간 시뮬레이터  DIY</b></h4>
            <p data-ke-size="size16">자기만의 선이 있음</p>
            <p data-ke-size="size16">내적 손절</p>
            <p data-ke-size="size16">감정을 잘 안 드러냄</p>
            <p data-ke-size="size16">생각이 복잡함</p>
            <p data-ke-size="size16">미리 스트레스받음</p>
            <p data-ke-size="size16">집요함</p>
            <p data-ke-size="size16">의도 파악이 빠름</p>
            <p data-ke-size="size16">낭만 좋아<span>!</span></p>
            <p data-ke-size="size16">도덕성의 기준이 높음</p>
            <p data-ke-size="size16">내적 관종</p>
            <p data-ke-size="size16">철학에 관심 많음</p>
            <p data-ke-size="size16">내면에 선과 악이 공존</p>
            <p data-ke-size="size16">생각을 못 멈춤</p>
            <p data-ke-size="size16">계획적</p>
            <p data-ke-size="size16"><span style="background-color: #ffffff; color: #0f0f0f;">개인플레이</span><span style="background-color: #ffffff; color: #0f0f0f;"> </span><span style="background-color: #ffffff; color: #0f0f0f;">선호</span></p>
            <p data-ke-size="size16"><span style="background-color: #ffffff; color: #0f0f0f;">모순덩어리</span></p>
            <p data-ke-size="size16"><span style="background-color: #ffffff; color: #0f0f0f;">모든</span><span style="background-color: #ffffff; color: #0f0f0f;"> </span><span style="background-color: #ffffff; color: #0f0f0f;">것에</span><span style="background-color: #ffffff; color: #0f0f0f;"> </span><span style="background-color: #ffffff; color: #0f0f0f;">진지함</span></p>
            <p data-ke-size="size16"><span style="background-color: #ffffff; color: #0f0f0f;">말</span><span style="background-color: #ffffff; color: #0f0f0f;"> </span><span style="background-color: #ffffff; color: #0f0f0f;">한마디에도</span><span style="background-color: #ffffff; color: #0f0f0f;"> </span><span style="background-color: #ffffff; color: #0f0f0f;">생각함</span></p>
            <p data-ke-size="size16">상대에게 맞추는 능력이 뛰어남</p>
                        <img src='https://images.ktestone.com/resultImages/DIY/INFJ.jpg' alt='INFJ' /><br /><br />

                        <h4 data-ke-size="size20"><b> </b><br /><b>ISFP 평화주의자 DIY</b><b></b></h4>
            <p data-ke-size="size16">맺고 끊음이 확실함</p>
            <p data-ke-size="size16">먼저 연락 잘 안 함</p>
            <p data-ke-size="size16">하루 종일 누워있기</p>
            <p data-ke-size="size16">음식 사진 다량 보유</p>
            <p data-ke-size="size16">귀찮아질까 봐 모른 척</p>
            <p data-ke-size="size16">감정 시한폭탄</p>
            <p data-ke-size="size16">아 진짜<span>?</span></p>
            <p data-ke-size="size16">게으르지만 간지 못 잃음</p>
            <p data-ke-size="size16">할 일 끝까지 미루기</p>
            <p data-ke-size="size16">안되면 되는 거 하는 편</p>
            <p data-ke-size="size16">예의 신경 많이 씀</p>
            <p data-ke-size="size16">안물안궁</p>
            <p data-ke-size="size16">강요 금지</p>
            <p data-ke-size="size16">그럴 수도 있지</p>
            <p data-ke-size="size16">너무 다가오면 부담스러움</p>
            <p data-ke-size="size16">아 그렇구나<span>(</span>관심 없음<span>)</span></p>
            <p data-ke-size="size16">공감 능력 뛰어남</p>
            <p data-ke-size="size16">안 읽씹</p>
            <p data-ke-size="size16">이불 밖은 위험해<span>!</span></p>
                        <img src='https://images.ktestone.com/resultImages/DIY/ISFP.jpg' alt='ISFP' /><br /><br />

                        <h4 data-ke-size="size20"><b></b><br /><b>ISFJ 현모양처 DIY</b></h4>
            <p data-ke-size="size16">아싸 중 인싸</p>
            <p data-ke-size="size16">사회적 페르소나</p>
            <p data-ke-size="size16">게으른 계획쟁이</p>
            <p data-ke-size="size16">전화보다 카톡</p>
            <p data-ke-size="size16">심리적 충격에 여운이 오래감</p>
            <p data-ke-size="size16">소울리스</p>
            <p data-ke-size="size16">계획 틀어지면 스트레스받음</p>
            <p data-ke-size="size16">차분함</p>
            <p data-ke-size="size16">뭐든 내가 하는 게 맘 편함</p>
            <p data-ke-size="size16">논쟁 극혐</p>
            <p data-ke-size="size16">인간관계 자체가 스트레스</p>
            <p data-ke-size="size16">소심함</p>
            <p data-ke-size="size16">나 대신 골라 줘 제발<span>..!</span></p>
            <p data-ke-size="size16">뭐든 각 잡고 시작</p>
            <p data-ke-size="size16">불편함을 티 내지 않음</p>
            <p data-ke-size="size16">아무거나 괜찮아</p>
            <p data-ke-size="size16">경제 관념 뚜렷함</p>
            <p data-ke-size="size16">가정적</p>
                        <img src='https://images.ktestone.com/resultImages/DIY/ISFJ.jpg' alt='ISFJ' /><br /><br />

                        <h4 data-ke-size="size20"><b> </b><br /><b>ISTJ 애늙은이 DIY</b></h4>
            <p data-ke-size="size16">노력파</p>
            <p data-ke-size="size16">소수와의 깊은 관계</p>
            <p data-ke-size="size16">성실함</p>
            <p data-ke-size="size16">지각 극혐</p>
            <p data-ke-size="size16">굳이<span>?</span></p>
            <p data-ke-size="size16">혼자도 좋아</p>
            <p data-ke-size="size16">천천히 다가오기</p>
            <p data-ke-size="size16">남에게 관심 없음</p>
            <p data-ke-size="size16">번개 약속 금지</p>
            <p data-ke-size="size16">장점보다 단점에 예민</p>
            <p data-ke-size="size16">계획대로 안 되면 짜증 남</p>
            <p data-ke-size="size16">내가 좋아야 연애함</p>
            <p data-ke-size="size16">사람 많은 곳은 싫어</p>
            <p data-ke-size="size16">자기 확신 강함</p>
            <p data-ke-size="size16">변수에 뚝딱거림</p>
            <p data-ke-size="size16">진지충</p>
            <p data-ke-size="size16">개인주의</p>
            <p data-ke-size="size16">철저한 준비</p>
            <p data-ke-size="size16">일에 따라 감정이 바뀜</p>
                        <img src='https://images.ktestone.com/resultImages/DIY/ISTJ.jpg' alt='ISTJ' /><br /><br />

                        <h4 data-ke-size="size20"><b> </b><br /><b>ISTP 개인주의 DIY</b></h4>
            <p data-ke-size="size16">꼰대 극혐</p>
            <p data-ke-size="size16">맞춤법에 예민함</p>
            <p data-ke-size="size16">빠꾸 없음</p>
            <p data-ke-size="size16">효율적인 벼락치기</p>
            <p data-ke-size="size16">폼생폼사</p>
            <p data-ke-size="size16">충동구매</p>
            <p data-ke-size="size16">뭐 어떻게든 되겠지</p>
            <p data-ke-size="size16">사회성 장착</p>
            <p data-ke-size="size16">너무 화나면 눈물 남</p>
            <p data-ke-size="size16">진짜 왜 저래<span>?</span></p>
            <p data-ke-size="size16">조용히 좀 해<span>!</span></p>
            <p data-ke-size="size16">그래서 어쩌라고<span>.</span></p>
            <p data-ke-size="size16">선택적 아싸</p>
            <p data-ke-size="size16">팩폭러</p>
            <p data-ke-size="size16">무조건 내가 <span>1</span>순위</p>
            <p data-ke-size="size16">징징 금지</p>
            <p data-ke-size="size16">프로 혼밥러</p>
            <p data-ke-size="size16">계획 짜고 안 지킴</p>
            <p data-ke-size="size16">뼛 속까지 귀찮음</p>
                        <img src='https://images.ktestone.com/resultImages/DIY/ISTP.jpg' alt='ISTP' /><br /><br />

                        <h4 data-ke-size="size20"><b> </b><br /><b>INTP 귀차니즘 DIY</b></h4>
            <p data-ke-size="size16">벼락부자가 꿈임</p>
            <p data-ke-size="size16">자기 확신에 차 있음</p>
            <p data-ke-size="size16">어딘가 부족한 사회성</p>
            <p data-ke-size="size16">어이없어서 웃는 중<span>^^</span></p>
            <p data-ke-size="size16">츤데레</p>
            <p data-ke-size="size16">잡지식 많음</p>
            <p data-ke-size="size16">남하고 얽히기 싫어함</p>
            <p data-ke-size="size16">궁금한 게 많음</p>
            <p data-ke-size="size16">무 논리 멈춰<span>!</span></p>
            <p data-ke-size="size16">니가 뭔데 날 판단해<span>?</span></p>
            <p data-ke-size="size16">인간 <span>&lt; </span>반려동물</p>
            <p data-ke-size="size16">토론충</p>
            <p data-ke-size="size16">집요함</p>
            <p data-ke-size="size16">여기저기서 기빨림</p>
            <p data-ke-size="size16">엉뚱한 상상</p>
            <p data-ke-size="size16">상황파악이 빠름</p>
            <p data-ke-size="size16">은은한 광기</p>
            <p data-ke-size="size16">고독함</p>
            <p data-ke-size="size16">전부 다 귀찮아</p>
                        <img src='https://images.ktestone.com/resultImages/DIY/INTP.jpg' alt='INTP' /><br /><br />

                        <h4 data-ke-size="size20"><b> </b><br /><b>INTJ 갓생러 DIY</b></h4>
            <p data-ke-size="size16"> </p>
            <p data-ke-size="size16">서치 고수,감정 수동 컨트롤,혼자만의 시간 꼭 필요</p>
            <p data-ke-size="size16">천재 <span>OR </span>바보,상황에 따른 페르소나,애매한 거 딱 질색</p>
            <p data-ke-size="size16">열심히 산다는 말 자주 들음</p>
            <p data-ke-size="size16">높은 자존감</p>
            <p data-ke-size="size16">깔끔쟁이</p>
            <p data-ke-size="size16">말 보다 행동으로 보여줌</p>
            <p data-ke-size="size16"><span style="background-color: #ffffff; color: #0f0f0f;">본질을</span><span style="background-color: #ffffff; color: #0f0f0f;"> </span><span style="background-color: #ffffff; color: #0f0f0f;">꿰뚫어</span><span style="background-color: #ffffff; color: #0f0f0f;"> </span><span style="background-color: #ffffff; color: #0f0f0f;">봄</span></p>
            <p data-ke-size="size16"><span style="background-color: #ffffff; color: #0f0f0f;">남에게</span><span style="background-color: #ffffff; color: #0f0f0f;"> </span><span style="background-color: #ffffff; color: #0f0f0f;">내</span><span style="background-color: #ffffff; color: #0f0f0f;"> </span><span style="background-color: #ffffff; color: #0f0f0f;">얘기</span><span style="background-color: #ffffff; color: #0f0f0f;"> </span><span style="background-color: #ffffff; color: #0f0f0f;">잘</span><span style="background-color: #ffffff; color: #0f0f0f;"> </span><span style="background-color: #ffffff; color: #0f0f0f;">안</span><span style="background-color: #ffffff; color: #0f0f0f;"> </span><span style="background-color: #ffffff; color: #0f0f0f;">함</span></p>
            <p data-ke-size="size16"><span style="background-color: #ffffff; color: #0f0f0f;">스스로를</span><span style="background-color: #ffffff; color: #0f0f0f;"> </span><span style="background-color: #ffffff; color: #0f0f0f;">채찍질함</span></p>
            <p data-ke-size="size16"><span style="background-color: #ffffff; color: #0f0f0f;">자기계발의</span><span style="background-color: #ffffff; color: #0f0f0f;"> </span><span style="background-color: #ffffff; color: #0f0f0f;">교과서</span></p>
            <p data-ke-size="size16"><span style="background-color: #ffffff; color: #0f0f0f;">내</span><span style="background-color: #ffffff; color: #0f0f0f;"> </span><span style="background-color: #ffffff; color: #0f0f0f;">사전에</span><span style="background-color: #ffffff; color: #0f0f0f;"> <span>&lsquo;</span></span><span style="background-color: #ffffff; color: #0f0f0f;">적당히</span><span style="background-color: #ffffff; color: #0f0f0f;">&rsquo;</span><span style="background-color: #ffffff; color: #0f0f0f;">란</span><span style="background-color: #ffffff; color: #0f0f0f;"> </span><span style="background-color: #ffffff; color: #0f0f0f;">없음</span></p>
            <p data-ke-size="size16"><span style="background-color: #ffffff; color: #0f0f0f;">외로워도</span><span style="background-color: #ffffff; color: #0f0f0f;"> </span><span style="background-color: #ffffff; color: #0f0f0f;">아무나</span><span style="background-color: #ffffff; color: #0f0f0f;"> </span><span style="background-color: #ffffff; color: #0f0f0f;">안</span><span style="background-color: #ffffff; color: #0f0f0f;"> </span><span style="background-color: #ffffff; color: #0f0f0f;">만남</span></p>
            <p data-ke-size="size16"><span style="background-color: #ffffff; color: #0f0f0f;">호불호</span><span style="background-color: #ffffff; color: #0f0f0f;"> </span><span style="background-color: #ffffff; color: #0f0f0f;">명확함</span></p>
            <p data-ke-size="size16"><span style="background-color: #ffffff; color: #0f0f0f;">지칠수록</span><span style="background-color: #ffffff; color: #0f0f0f;"> </span><span style="background-color: #ffffff; color: #0f0f0f;">흑화함</span></p>
            <p data-ke-size="size16"><span style="background-color: #ffffff; color: #0f0f0f;">잡지식</span></p>
            <p data-ke-size="size16"> </p>
            <img src='https://images.ktestone.com/resultImages/DIY/INTJ.jpg' alt='INTJ' /><br /><br />

            <h3><b>DIY 성격 테스트 MBTI 정리표</b></h3>
            <img src='https://images.ktestone.com/blog/DIY/DIY-blog-table.jpg' alt='DIY-blog-table' /><br /><br />
        `,
        relatedArticles:[],
        category:"MBTI"
    },
    // {
    //     mainTitle: `연애 꽃밭 테스트 MBTI 및 해석 결과`,
    //     date:`2023-05-25`,
    //     mainUrl:`flowerGardenblog`,
    //     thumbImg:"https://images.ktestone.com/blog/flowerGarden/flowerGarden-blog-thumb.jpg",
    //     desc:`케이테스트 x 연애 꽃밭 테스트`,
    //     contents:`
    //         <h3><b>연애 꽃밭 테스트 MBTI 및 해석 결과</b></h3>
    //         <p>총 12가지 질문으로 구성된 연애 꽃밭 테스트 입니다.<br />연애 꽃밭 성격테스트 MBTI에 대해 안내해드리겠습니다.</p>

    //         <h4><br /><b>ENTP </b></h4>
    //         <p>사람과 조직의 문제점을 빠르게 파악하고 해결사 역할을 해요<br />처음 보는 사람과 터울 없이 말을 하고, 논리적으로 말하는 편이에요.<br />당당하고 솔직한 편이고, 무엇보다 자기애가 굉장히 높아요.<br />풍부한 아이디어를 바탕으로 끊임없는 도전을 즐겨요.<br />하지만 마무리가 끝까지 안 되는 경향이 있어요.</p>
    //         <img src='https://images.ktestone.com/resultImages/flowerGarden/ENTP.jpg' alt='ENTP' /><br /><br />

    //         <h4><br /><b>ESFP </b></h4>
    //         <p>선입견이 없고, 친화력이 좋아요.<br />친구들 사이에서 모르는 사람이 없는 핵인싸 재질이에요.<br />겉으론 낙천적이고 털털한 편이지만, 사실 현실적인 걱정이 많아요.<br />사람들에게 긍정적인 리액션과 공감을 잘해줘요.<br />할 일 미루기가 주특기에요.</p>
    //         <img src='https://images.ktestone.com/resultImages/flowerGarden/ESFP.jpg' alt='ESFP' /><br /><br />

    //         <h4><br /><b>ESTJ </b></h4>
    //         <p>사람들 앞에서 나서서 말하는 것을 잘하고,<br />말투가 당당하고 솔직한 편이라 가끔은 오해를 사기도 해요.<br />똑 부러지고, 정직한 성격이에요.<br />갈등 상황에는 피하지 않고 논리를 바탕으로 해결하려고 해요.<br />계획을 미리 세워 놓는 편이며, 틀어지면 매우 예민해져요.</p>
    //         <img src='https://images.ktestone.com/resultImages/flowerGarden/ESTJ.jpg' alt='ESTJ' /><br /><br />

    //         <h4><br /><b>ESTP </b></h4>
    //         <p>쾌활하고, 선입견 없는 단순한 성격으로 친구들이 많아요.<br />순간적인 센스와 말빨로 사람들을 빵 터트리기도 해요.<br />매우 현실적인 편이지만, 내기나, 주식 등 승부욕에<br />사로잡혀 뜻하지 않은 지출을 할 때가 있어요.<br />남들과는 다른 도전을 즐기지만, 다소 뒷심이 부족한 면이 있어요.</p>
    //         <img src='https://images.ktestone.com/resultImages/flowerGarden/ESTP.jpg' alt='ESTP' /><br /><br />

    //         <h4><br /><b>ESFJ </b></h4>
    //         <p>친화력이 뛰어나고, 인간관계를 중요시하는 성격이에요.<br />다른 사람들 반응에 민감하고, 항상 배려 있게 대해요.<br />인정과 칭찬을 매우 좋아하고, 외로움은 견디기 힘들어해요.<br />다른 사람들에게 해결 방법보다는 감정적인 공감을 주로 하는 타입이에요<br />계획을 철저하게 세우고, 계획이 틀어지면 매우 예민해져요.</p>
    //         <img src='https://images.ktestone.com/resultImages/flowerGarden/ESFJ.jpg' alt='ESFJ' /><br /><br />

    //         <h4><br /><b>ENFJ </b></h4>
    //         <p>사교성이 뛰어나고, 말을 재치 있게 잘함<br />항상 기분 좋은 에너지를 발산함<br />감정적인 공감 능력이 뛰어나 사람들 사이에서 온화한 리더가 됨<br />상대의 좋은 점 먼저 보고 생각함<br />상상력이 풍부해 일어나지 않은 일을 걱정할 때가 있음<br />계획적으로 생활을 하려고 하는 스타일임</p>
    //         <img src='https://images.ktestone.com/resultImages/flowerGarden/ENFJ.jpg' alt='ENFJ' /><br /><br />

    //         <h4><br /><b>ENTP </b></h4>
    //         <p>다른 사람들에게 관심이 많고, 함께 노는 것을 즐기는 성격으로<br />시간이 지날수록 에너지가 차오르는 성격이에요.<br />가끔 엉뚱한 상상력으로 주변 사람들을 당황하게 하기도 해요<br />감정 기복이 다소 심하지만, 티를 잘 내지 않다가 한 번에 터져 나오기도 해요.<br />호기심이 많고, 감성적인 것에 약해 충동적으로 무언가를 구매하는 경향이 있어요.</p>
    //         <img src='https://images.ktestone.com/resultImages/flowerGarden/ENTP.jpg' alt='ENTP' /><br /><br />

    //         <h4><br /><b>ENTJ </b></h4>
    //         <p>강한 자기주장과 추진력을 겸비한 리더 그 자체의 성격이에요.<br />상상력이 뛰어나고, 아이디어를 바탕으로 도전하는 것을 즐겨요.<br />효율적인 것을 좋아하고, 승부욕이 넘쳐요<br />목표 지향적인 삶을 살려고 하고, 계획적이고 치밀해요.<br /></p>
    //         <img src='https://images.ktestone.com/resultImages/flowerGarden/ENTJ.jpg' alt='ENTJ' /><br /><br />

    //         <h4><b>INFP </b></h4>
    //         <p>감정적이고, 삶에 대한 이상적인 상상을 많이 하는 성격이에요<br />처음 가는 공적인 자리에서는 낯을 가리지만,<br />처음 보는 사람에게는 말을 곧 잘 걸어요.<br />감정 기복이 심한 편이에요.<br />단순한 것을 좋아하고, 규율, 규칙을 중요시하는 성격이에요.</p>
    //         <img src='https://images.ktestone.com/resultImages/flowerGarden/INFP.jpg' alt='INFP' /><br /><br />

    //         <h4><br /><b>INFJ </b></h4>
    //         <p>감성적이고 자신만의 가치관이 뚜렷한 성격이에요.<br />상상력이 풍부하고, 생각과 고민을 많이 해요!<br />상대방의 말에 경청을 잘하고 리액션이 좋아요.<br />계획적으로 생각하고, 섬세한 성격이에요.</p>
    //         <img src='https://images.ktestone.com/resultImages/flowerGarden/INFJ.jpg' alt='INFJ' /><br /><br />

    //         <h4><br /><b>ISFP </b></h4>
    //         <p>평소 조용하고 사람 많은 곳을 기 빨려 하는 성격이에요.<br />경제관념이 뛰어나며, 분석적이고 비판적인 판단을 잘해요.<br />감정에 충실하지만, 티는 내지 않고 정이 많은 성격이에요.<br />새로운 것을 시도하는 것을 즐기지만, 마무리는 다소 아쉬운 부분이 있어요.</p>
    //         <img src='https://images.ktestone.com/resultImages/flowerGarden/ISFP.jpg' alt='ISFP' /><br /><br />

    //         <h4><br /><b>ISFJ </b></h4>
    //         <p>예의를 중요하게 생각하고, 우직한 성격의 소유자예요.<br />속이 깊고, 인내심이 좋은 편이에요.<br />감정적인 공감을 잘하면서도, 합리적인 선택을 고집해요.<br />뭐든 계획적으로 실행하는 편이며, 매우 섬세한 완벽주의자예요.</p>
    //         <img src='https://images.ktestone.com/resultImages/flowerGarden/ISFJ.jpg' alt='ISFJ' /><br /><br />

    //         <h4><br /><b>ISTJ </b></h4>
    //         <p>혼자 있는 시간을 소중하게 생각하는 독립적인 성격이에요.<br />매우 현실적이며, 항상 합리적인 선택을 하는 성격이에요.<br />감정보다는 논리를 앞세우며, 먼저 머리로 이해해야 하는 타입이에요.<br />뭐든 계획을 세워 순차적으로 질서 있게 진행하는 것을 선호해요.</p>
    //         <img src='https://images.ktestone.com/resultImages/flowerGarden/ISTJ.jpg' alt='ISTJ' /><br /><br />

    //         <h4><br /><b>ISTP </b></h4>
    //         <p>내향적이며, 소수와 깊게 어울리는 성격으로,<br />타인에게 무관심하지만 내 사람들이라고 판단되는 사람들에게는 최선을 다해요.<br />머리가 좋아 항상 이유가 타당하고 효율적인 선택을 해요.<br />하지만 게으른 탓에 탁월한 선택과 과정에 비해 결과가 아쉬운 편이에요.</p>
    //         <img src='https://images.ktestone.com/resultImages/flowerGarden/ISTP.jpg' alt='ISTP' /><br /><br />

    //         <h4><br /><b>INTP </b></h4>
    //         <p>평소 내향적이지만 외향적으로 바꿀 수 있는 선택적 내향인이에요.<br />참신한 아이디어와 상상력이 가득하지만, 아쉽게도<br />당장 실현 가능성이 있는 아이디어는 별로 없어요.<br />항상 논리를 앞세워 자기 아이디어를 이야기하지만,<br />귀찮음이 많아 실행하는 데는 항상 어려움이 발생해요.</p>
    //         <img src='https://images.ktestone.com/resultImages/flowerGarden/INTP.jpg' alt='INTP' /><br /><br />

    //         <h4><br /><b>INTJ </b></h4>
    //         <p>체계적이고 계획적인 것을 선호하는 완벽주의자 성향의 소유자예요.<br />혼자 있는 시간도 그냥 보내지 않고 자기 계발을 하는 치밀한 갓생러죠.<br />상상력이 풍부하고 미리 무언가를 예측하는 것을 즐기고 잘하는 능력이 있어요.<br />그래서 삶에서 계획을 빼놓을 수 없고, 계획에 맞춰 체계적인 삶을 살려고 하는 유형이에요.<br /></p>
    //         <img src='https://images.ktestone.com/resultImages/flowerGarden/INTJ.jpg' alt='INTJ' /><br /><br />

    //         <h3><b>연애 꽃밭 성격 테스트 MBTI 정리표</b></h3>
    //         <img src='https://images.ktestone.com/blog/flowerGarden/flowerGarden-blog-table.jpg' alt='flowerGarden-blog-table' /><br /><br />
    //     `,
    //     relatedArticles:[],
    //     category:"MBTI"
    // },
    // {
    //     mainTitle: `퍼즐 테스트 MBTI 및 해석 결과`,
    //     date:`2023-05-25`,
    //     mainUrl:`puzzleLoveblog`,
    //     thumbImg:"https://images.ktestone.com/blog/puzzleLove/puzzleLove-blog-thumb.jpg",
    //     desc:`케이테스트 x 퍼즐 테스트`,
    //     contents:`
    //         <h3><b>퍼즐 테스트 MBTI 및 해석 결과</b></h3>
    //         <p>총 12가지 질문으로 구성된 퍼즐 테스트 입니다.<br />퍼즐 성격테스트 MBTI에 대해 안내해드리겠습니다.</p>

    //         <h4><br /><b>ENTP </b></h4>
    //         <p>사람과 조직의 문제점을 빠르게 파악하고 해결사 역할을 해요<br />처음 보는 사람과 터울 없이 말을 하고, 논리적으로 말하는 편이에요.<br />당당하고 솔직한 편이고, 무엇보다 자기애가 굉장히 높아요.<br />풍부한 아이디어를 바탕으로 끊임없는 도전을 즐겨요.<br />하지만 마무리가 끝까지 안 되는 경향이 있어요.</p>
    //         <img src='https://images.ktestone.com/resultImages/puzzleLove/ENTP.jpg' alt='ENTP' /><br /><br />

    //         <h4><br /><b>ESFP </b></h4>
    //         <p>선입견이 없고, 친화력이 좋아요.<br />친구들 사이에서 모르는 사람이 없는 핵인싸 재질이에요.<br />겉으론 낙천적이고 털털한 편이지만, 사실 현실적인 걱정이 많아요.<br />사람들에게 긍정적인 리액션과 공감을 잘해줘요.<br />할 일 미루기가 주특기에요.</p>
    //         <img src='https://images.ktestone.com/resultImages/puzzleLove/ESFP.jpg' alt='ESFP' /><br /><br />

    //         <h4><br /><b>ESTJ </b></h4>
    //         <p>사람들 앞에서 나서서 말하는 것을 잘하고,<br />말투가 당당하고 솔직한 편이라 가끔은 오해를 사기도 해요.<br />똑 부러지고, 정직한 성격이에요.<br />갈등 상황에는 피하지 않고 논리를 바탕으로 해결하려고 해요.<br />계획을 미리 세워 놓는 편이며, 틀어지면 매우 예민해져요.</p>
    //         <img src='https://images.ktestone.com/resultImages/puzzleLove/ESTJ.jpg' alt='ESTJ' /><br /><br />

    //         <h4><br /><b>ESTP </b></h4>
    //         <p>쾌활하고, 선입견 없는 단순한 성격으로 친구들이 많아요.<br />순간적인 센스와 말빨로 사람들을 빵 터트리기도 해요.<br />매우 현실적인 편이지만, 내기나, 주식 등 승부욕에<br />사로잡혀 뜻하지 않은 지출을 할 때가 있어요.<br />남들과는 다른 도전을 즐기지만, 다소 뒷심이 부족한 면이 있어요.</p>
    //         <img src='https://images.ktestone.com/resultImages/puzzleLove/ESTP.jpg' alt='ESTP' /><br /><br />

    //         <h4><br /><b>ESFJ </b></h4>
    //         <p>친화력이 뛰어나고, 인간관계를 중요시하는 성격이에요.<br />다른 사람들 반응에 민감하고, 항상 배려 있게 대해요.<br />인정과 칭찬을 매우 좋아하고, 외로움은 견디기 힘들어해요.<br />다른 사람들에게 해결 방법보다는 감정적인 공감을 주로 하는 타입이에요<br />계획을 철저하게 세우고, 계획이 틀어지면 매우 예민해져요.</p>
    //         <img src='https://images.ktestone.com/resultImages/puzzleLove/ESFJ.jpg' alt='ESFJ' /><br /><br />

    //         <h4><br /><b>ENFJ </b></h4>
    //         <p>사교성이 뛰어나고, 말을 재치 있게 잘함<br />항상 기분 좋은 에너지를 발산함<br />감정적인 공감 능력이 뛰어나 사람들 사이에서 온화한 리더가 됨<br />상대의 좋은 점 먼저 보고 생각함<br />상상력이 풍부해 일어나지 않은 일을 걱정할 때가 있음<br />계획적으로 생활을 하려고 하는 스타일임</p>
    //         <img src='https://images.ktestone.com/resultImages/puzzleLove/ENFJ.jpg' alt='ENFJ' /><br /><br />

    //         <h4><br /><b>ENTP </b></h4>
    //         <p>다른 사람들에게 관심이 많고, 함께 노는 것을 즐기는 성격으로<br />시간이 지날수록 에너지가 차오르는 성격이에요.<br />가끔 엉뚱한 상상력으로 주변 사람들을 당황하게 하기도 해요<br />감정 기복이 다소 심하지만, 티를 잘 내지 않다가 한 번에 터져 나오기도 해요.<br />호기심이 많고, 감성적인 것에 약해 충동적으로 무언가를 구매하는 경향이 있어요.</p>
    //         <img src='https://images.ktestone.com/resultImages/puzzleLove/ENTP.jpg' alt='ENTP' /><br /><br />

    //         <h4><br /><b>ENTJ </b></h4>
    //         <p>강한 자기주장과 추진력을 겸비한 리더 그 자체의 성격이에요.<br />상상력이 뛰어나고, 아이디어를 바탕으로 도전하는 것을 즐겨요.<br />효율적인 것을 좋아하고, 승부욕이 넘쳐요<br />목표 지향적인 삶을 살려고 하고, 계획적이고 치밀해요.<br /></p>
    //         <img src='https://images.ktestone.com/resultImages/puzzleLove/ENTJ.jpg' alt='ENTJ' /><br /><br />

    //         <h4><b>INFP </b></h4>
    //         <p>감정적이고, 삶에 대한 이상적인 상상을 많이 하는 성격이에요<br />처음 가는 공적인 자리에서는 낯을 가리지만,<br />처음 보는 사람에게는 말을 곧 잘 걸어요.<br />감정 기복이 심한 편이에요.<br />단순한 것을 좋아하고, 규율, 규칙을 중요시하는 성격이에요.</p>
    //         <img src='https://images.ktestone.com/resultImages/puzzleLove/INFP.jpg' alt='INFP' /><br /><br />

    //         <h4><br /><b>INFJ </b></h4>
    //         <p>감성적이고 자신만의 가치관이 뚜렷한 성격이에요.<br />상상력이 풍부하고, 생각과 고민을 많이 해요!<br />상대방의 말에 경청을 잘하고 리액션이 좋아요.<br />계획적으로 생각하고, 섬세한 성격이에요.</p>
    //         <img src='https://images.ktestone.com/resultImages/puzzleLove/INFJ.jpg' alt='INFJ' /><br /><br />

    //         <h4><br /><b>ISFP </b></h4>
    //         <p>평소 조용하고 사람 많은 곳을 기 빨려 하는 성격이에요.<br />경제관념이 뛰어나며, 분석적이고 비판적인 판단을 잘해요.<br />감정에 충실하지만, 티는 내지 않고 정이 많은 성격이에요.<br />새로운 것을 시도하는 것을 즐기지만, 마무리는 다소 아쉬운 부분이 있어요.</p>
    //         <img src='https://images.ktestone.com/resultImages/puzzleLove/ISFP.jpg' alt='ISFP' /><br /><br />

    //         <h4><br /><b>ISFJ </b></h4>
    //         <p>예의를 중요하게 생각하고, 우직한 성격의 소유자예요.<br />속이 깊고, 인내심이 좋은 편이에요.<br />감정적인 공감을 잘하면서도, 합리적인 선택을 고집해요.<br />뭐든 계획적으로 실행하는 편이며, 매우 섬세한 완벽주의자예요.</p>
    //         <img src='https://images.ktestone.com/resultImages/puzzleLove/ISFJ.jpg' alt='ISFJ' /><br /><br />

    //         <h4><br /><b>ISTJ </b></h4>
    //         <p>혼자 있는 시간을 소중하게 생각하는 독립적인 성격이에요.<br />매우 현실적이며, 항상 합리적인 선택을 하는 성격이에요.<br />감정보다는 논리를 앞세우며, 먼저 머리로 이해해야 하는 타입이에요.<br />뭐든 계획을 세워 순차적으로 질서 있게 진행하는 것을 선호해요.</p>
    //         <img src='https://images.ktestone.com/resultImages/puzzleLove/ISTJ.jpg' alt='ISTJ' /><br /><br />

    //         <h4><br /><b>ISTP </b></h4>
    //         <p>내향적이며, 소수와 깊게 어울리는 성격으로,<br />타인에게 무관심하지만 내 사람들이라고 판단되는 사람들에게는 최선을 다해요.<br />머리가 좋아 항상 이유가 타당하고 효율적인 선택을 해요.<br />하지만 게으른 탓에 탁월한 선택과 과정에 비해 결과가 아쉬운 편이에요.</p>
    //         <img src='https://images.ktestone.com/resultImages/puzzleLove/ISTP.jpg' alt='ISTP' /><br /><br />

    //         <h4><br /><b>INTP </b></h4>
    //         <p>평소 내향적이지만 외향적으로 바꿀 수 있는 선택적 내향인이에요.<br />참신한 아이디어와 상상력이 가득하지만, 아쉽게도<br />당장 실현 가능성이 있는 아이디어는 별로 없어요.<br />항상 논리를 앞세워 자기 아이디어를 이야기하지만,<br />귀찮음이 많아 실행하는 데는 항상 어려움이 발생해요.</p>
    //         <img src='https://images.ktestone.com/resultImages/puzzleLove/INTP.jpg' alt='INTP' /><br /><br />

    //         <h4><br /><b>INTJ </b></h4>
    //         <p>체계적이고 계획적인 것을 선호하는 완벽주의자 성향의 소유자예요.<br />혼자 있는 시간도 그냥 보내지 않고 자기 계발을 하는 치밀한 갓생러죠.<br />상상력이 풍부하고 미리 무언가를 예측하는 것을 즐기고 잘하는 능력이 있어요.<br />그래서 삶에서 계획을 빼놓을 수 없고, 계획에 맞춰 체계적인 삶을 살려고 하는 유형이에요.<br /></p>
    //         <img src='https://images.ktestone.com/resultImages/puzzleLove/INTJ.jpg' alt='INTJ' /><br /><br />

    //         <h3><b>퍼즐 성격 테스트 MBTI 정리표</b></h3>
    //         <img src='https://images.ktestone.com/blog/puzzleLove/puzzleLove-blog-table.jpg' alt='puzzleLove-blog-table' /><br /><br />
    //     `,
    //     relatedArticles:[],
    //     category:"MBTI"
    // },
];

export default ARTICLES;
