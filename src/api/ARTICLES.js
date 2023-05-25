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

            <h4><br /><b>ESTJ 솔직 DAN</b></h4>
            <p>사람들 앞에서 나서서 말하는 것을 잘하고,<br />말투가 당당하고 솔직한 편이라 가끔은 오해를 사기도 해요.<br />똑 부러지고, 정직한 성격이에요.<br />갈등 상황에는 피하지 않고 논리를 바탕으로 해결하려고 해요.<br />계획을 미리 세워 놓는 편이며, 틀어지면 매우 예민해져요.</p>
            <img src='https://images.ktestone.com/resultImages/DNA/ESTJ.jpg' alt='ESTJ' /><br /><br />

            <h4><br /><b>ESTP 본능 DNA</b></h4>
            <p>쾌활하고, 선입견 없는 단순한 성격으로 친구들이 많아요.<br />순간적인 센스와 말빨로 사람들을 빵 터트리기도 해요.<br />매우 현실적인 편이지만, 내기나, 주식 등 승부욕에<br />사로잡혀 뜻하지 않은 지출을 할 때가 있어요.<br />남들과는 다른 도전을 즐기지만, 다소 뒷심이 부족한 면이 있어요.</p>
            <img src='https://images.ktestone.com/resultImages/DNA/ESTP.jpg' alt='ESTP' /><br /><br />

            <h4><br /><b>ESFJ 평화 DNA</b></h4>
            <p>친화력이 뛰어나고, 인간관계를 중요시하는 성격이에요.<br />다른 사람들 반응에 민감하고, 항상 배려 있게 대해요.<br />인정과 칭찬을 매우 좋아하고, 외로움은 견디기 힘들어해요.<br />다른 사람들에게 해결 방법보다는 감정적인 공감을 주로 하는 타입이에요<br />계획을 철저하게 세우고, 계획이 틀어지면 매우 예민해져요.</p>
            <img src='https://images.ktestone.com/resultImages/DNA/ESFJ.jpg' alt='ESFJ' /><br /><br />

            <h4><br /><b>ENFJ 의리 DAN</b></h4>
            <p>사교성이 뛰어나고, 말을 재치 있게 잘함<br />항상 기분 좋은 에너지를 발산함<br />감정적인 공감 능력이 뛰어나 사람들 사이에서 온화한 리더가 됨<br />상대의 좋은 점 먼저 보고 생각함<br />상상력이 풍부해 일어나지 않은 일을 걱정할 때가 있음<br />계획적으로 생활을 하려고 하는 스타일임</p>
            <img src='https://images.ktestone.com/resultImages/DNA/ENFJ.jpg' alt='ENFJ' /><br /><br />

            <h4><br /><b>ENTP 긍정 DAN</b></h4>
            <p>다른 사람들에게 관심이 많고, 함께 노는 것을 즐기는 성격으로<br />시간이 지날수록 에너지가 차오르는 성격이에요.<br />가끔 엉뚱한 상상력으로 주변 사람들을 당황하게 하기도 해요<br />감정 기복이 다소 심하지만, 티를 잘 내지 않다가 한 번에 터져 나오기도 해요.<br />호기심이 많고, 감성적인 것에 약해 충동적으로 무언가를 구매하는 경향이 있어요.</p>
            <img src='https://images.ktestone.com/resultImages/DNA/ENTP.jpg' alt='ENTP' /><br /><br />

            <h4><br /><b>ENTJ 리더 DAN</b></h4>
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
];

export default ARTICLES;
